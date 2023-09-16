const PelangganModel = require("../models/PelangganModel");

async function getALL(req, res) {
  try {
    const result = await PelangganModel.getALL();
    res.json({ data: result });
  } catch (error) {
    console.log("Error , ", error);
    res.status(500).json({ message: "Error saat mengambil data pelanggan" });
  }
}

module.exports = { getALL };
