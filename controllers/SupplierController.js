const SupplierModel = require("../models/SupplierModel");

async function getALL(req, res) {
  try {
    const result = await SupplierModel.getALL();
    res.json({ data: result });
  } catch (error) {
    console.log("Error , ", error);
    res.status(500).json({ message: "Error saat mengambil data supplier" });
  }
}

module.exports = { getALL };
