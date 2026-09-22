const Router = require('express')
const router = new Router()
const DeviceController = require('../controllers/deviceControlle')



router.post('/',DeviceController.createNewDevice)
router.delete('/',DeviceController.deleteDevice)
router.get('/all', DeviceController.getAllDevices)
router.get('/:id',DeviceController.getDevice)

module.exports = router