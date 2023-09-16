const db = require("../config/database");

async function getALL() {
  const conn = await db.getConnection();
  try {
    const [rows, fields] = await conn.execute("SELECT * FROM pegawai");
    conn.release();
    return rows;
  } finally {
    conn.release();
  }
}

async function getById(id) {
  const conn = await db.getConnection();
  try {
    const [rows, fields] = await conn.execute(
      "SELECT * FROM Pegawai WHERE nrp = ?",
      [id]
    );
    return rows;
  } finally {
    conn.release();
  }
}

async function tambah(data) {
  const conn = await db.getConnection();
  try {
    const kolom = Object.keys(data).join(","); // "(nrp, nama, tanggal_lahir, jenis_kelamin, tempat_tinggal)"
    const values = Object.keys(data); // "[202120009, "King Robert", "1990-02-04T17:00:00.000Z", "L", "Bandung", 3492465]"
    const tandaTanya = values.map(() => "?").join(","); // "?, ?, ?, ?, ?, ?,""
    const query = `INSERT INTO Pegawai (${kolom}) VALUES (${tandaTanya})`;
    const result = await conn.execute(query, values);
    return result;
  } finally {
    conn.release();
  }
}

async function ubah(id, data) {
  const conn = await db.getConnection();
  try {
    const updateQuery = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(",");
    const values = Object.values(data);
    const query = `UPDATE Pegawai
                  SET ${updateQuery}
                  WHERE nrp=?;`;
    const result = await conn.execute(query, [...values, id]);
    return result;
  } finally {
    conn.release();
  }
}

async function hapus(id) {
  const conn = await db.getConnection();
  try {
    const result = conn.execute("DELETE FROM Pegawai WHERE nrp = ?;", [id]);
    return result;
  } finally {
    conn.release();
  }
}

module.exports = { getALL, getById, tambah, ubah, hapus };
