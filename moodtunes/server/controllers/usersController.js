import sql from 'mssql';
import pool from '../db/dbConfig.js';

// Get user by username
export const getUser = async (req, res) => {
    const { username } = req.params;
    try {
        const result = await pool.request()
            .input('username', sql.VarChar, username)
            .query('SELECT username, name, email FROM Users WHERE username = @username');
        if (result.recordset.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(result.recordset[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};