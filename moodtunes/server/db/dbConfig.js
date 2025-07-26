import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  server: "sql.bsite.net\\MSSQL2016",
  database: "crystalz03_",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 1433,
  options: {
    encrypt: true,
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(dbConfig);

pool.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

export default pool;
