const router = require('express').Router();
const UserController = require('../controllers/user-controller.js')
const authentication = require('../middleware/authentication.js')
const barangRoutes = require('./barang-routes.js')
router.post('/login',UserController.postLogin)
router.use(authentication)
router.use('/barang',barangRoutes)
module.exports = router
