const barangModel = require("../models/BarangModel");

async function getALL(req, res) {
  try {
    const result = await BarangModel.getALL();
    res.json({ data: result });
  } catch (error) {
    console.log("Error , ", error);
    res.status(500).json({ message: "Error saat mengambil data barang" });
  }
}

module.exports = { getALL };