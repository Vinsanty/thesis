const Router = require('express')
const router = new Router()
const BascketContoller = require('../controllers/basketController')
const basketController = require('../controllers/basketController')

router.get('/',BascketContoller.getItem)
router.post('/',basketController.addItem)
router.delete('/',basketController.deleteItem)


module.exports = router