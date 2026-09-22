const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRouter')
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const basketRouter = require('./basketRouter')
const reviewsRouter = require('./reviewsRouter')
const orderRouter = require('./orderRouter')

router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)
router.use('/user',userRouter)
router.use('/basket',basketRouter)
router.use('/reviews',reviewsRouter)
router.use('/orders', orderRouter)

module.exports = router