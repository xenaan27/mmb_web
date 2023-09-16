const express = require("express");
const app = express();
const port = 5005;
const apiRoutes = require("./routes/api");
const db = require("./config/database");
const res = require("express/lib/response");

// Parse JSON request body
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello, ini halaman pertama saya menggunakan Express.js!!");
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("Server up and running on port ${port} ...");
});

app.get("/api/pelanggan", async (req, res) => {
  try {
    const conn = await db.getConnection();
    const [rows, fields] = await conn.execute("SELECT * FROM pelanggan");
    conn.release();
    res.status(200).json({ data: rows });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ error: "Error saat mengambil data" });
  }
});
