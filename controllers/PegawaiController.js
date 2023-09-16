const PegawaiModel = require("../models/PegawaiModel");

async function getALL(req, res) {
  try {
    const result = await PegawaiModel.getALL();
    res.json({ data: result });
  } catch (error) {
    console.log("Error , ", error);
    res.status(500).json({ message: "Error saat mengambil data pegawai" });
  }
}
async function getById(req, res) {
  try {
    const id = req.params.id;
    const result = await PegawaiModel.getById(id);
    res.json({ data: result });
  } catch (error) {
    console.log("error : ", error);
    res
      .status(500)
      .json({ message: "Error saat mengambil data pegawai berdasarkan NRP" });
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body;

    const result = await PegawaiModel.tambah(dataBaru);
    res.json({ message: "Berhasil menambahkan data Pegawai" });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ message: "Error saat mengambil data pegawai " });
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const dataUpdate = req.body;
    const result = await PegawaiModel.ubah(id, dataUpdate);
    res.json({ message: "Berhasil mengubah data Pegawai" });
  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({ message: "Error saat mengubah data Pegawai " });
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const result = await PegawaiModel.hapus(id);
    res.json({ message: "Berhasil menghapus data Pegawai " });
  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({ message: "Error saat menghapus data Pegawai " });
  }
}

module.exports = { getALL, getById, create, update, destroy };
