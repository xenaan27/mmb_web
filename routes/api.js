const express = require("express");
const router = express.Router();
const PegawaiController = require("../controllers/PegawaiController");
const BarangController = require("../controllers/BarangController");
const supplierController = require("../controllers/SupplierController");
const pelangganController = require("../controllers/PelangganController");

router.get("/pegawai", PegawaiController.getALL);
router.get("/pegawai/:id", PegawaiController.getById);
router.post("/pegawai", PegawaiController.create);
router.put("/pegawai/:id", PegawaiController.update);
router.delete("/pegawai/:id", PegawaiController.destroy);

router.get("/barang", BarangController.getALL);


router.get("/supplier", supplierController.getALL);

router.get("/pelanggan", pelangganController.getALL);

module.exports = router;
