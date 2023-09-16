const express = require("express");
const app = express();
const port = 5005;
const db = require("./config/database");

app.get("/", (request, response) => {
  response.send("Hello, ini halaman pertama saya menggunakan ExpressJS !! ");
});

app.get("/api/data_dummy", (req, res) => {
  res.json([{ nama: "xena" }, { nama: "arinia" }]);
});

// end point untuk mendapatkan data semua pegawai
app.get("/api/pegawai", async (req, res) => {
  try {
    // buka koneksi ke database 
    const conn = await db.getConnection();
    // jalankan query SELECT
    const [rows, fields] = await conn.execute("SELECT * FROM pegawai");
    // lepas koneksi database
    conn.release();
    // tampilkan ke user
    res.status(200).json({ data: rows });
  } catch (error) {
    // tampilkan error di terminal
    console.log("Error : ", error);
    // tampilkan error di user 
    res.status(500).json({ error: "Error saat mengambil data pegawai!" });
  }
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port} ...`);
});
