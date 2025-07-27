import sql from 'mssql';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import pool from '../db/dbConfig.js';

// SignIn
export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const result = await pool.request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM Users WHERE email = @email');

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: 'Email not found.' });
    }

    const user = result.recordset[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
      }
    });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// SingUp
export const handleNewUser = async (req, res) => {
  const { username, password, name, email } = req.body;

  if (!username || !password || !name || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if username already exists
    const result = await pool.request()
      .input('username', sql.VarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');

    if (result.recordset.length > 0) {
      return res.status(409).json({ message: 'Username already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = crypto.randomInt(1, 1000000);

    await pool.request()
      .input('id', sql.Int, userId)
      .input('username', sql.VarChar, username)
      .input('password', sql.VarChar, hashedPassword)
      .input('name', sql.VarChar, name)
      .input('email', sql.VarChar, email)

      .query(`
        INSERT INTO Users (id, username, password, name, email)
        VALUES (@id, @username, @password, @name, @email)
      `);

    return res.status(201).json({ message: `User ${username} registered successfully.` });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
