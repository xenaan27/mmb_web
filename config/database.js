const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost", // localhost atau 127.0.0.1
  port: "3306", // sesuaikan port , default 3306
  user: "root", // user
  password: "", // xampp password nya kosong
  database: "toko_xena", // nama database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// di export sesuai kebutuhan
module.exports = pool
