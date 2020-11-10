const router = require('express').Router();
const BarangController = require('../controllers/barang-controller.js')
router.post('/',BarangController.addBarang)
router.get('/',BarangController.getBarang)
router.get('/:idbarang',BarangController.getBarangId)
router.put('/:idbarang',BarangController.putBarang)
router.delete('/:idbarang',BarangController.deleteBarang)
module.exports = router
