const db = require("../config/database");

async function getALL() {
  const conn = await db.getConnection();
  try {
    const [rows, fields] = await conn.execute("SELECT * FROM pelanggan");
    conn.release();
    return rows;
  } finally {
    conn.release();
  }
}

module.exports = { getALL };
