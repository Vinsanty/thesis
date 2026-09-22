const Router = require('express')
const router = new Router()
const OrderRouter = require('../controllers/orderController')



router.post('/',OrderRouter.createOrder)
router.get('/',OrderRouter.getUserOrders)
router.get('/all_orders',OrderRouter.getAllOrders)


module.exports = router