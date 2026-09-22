const Router = require('express')
const router = new Router()
const BrandController = require('../controllers/brandController')

router.get('/',BrandController.getBrand)
router.post('/',BrandController.createNewBrand)

module.exports = router