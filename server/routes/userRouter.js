const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/login',UserController.login)
router.post('/registration',UserController.registration)
router.get('/auth',authMiddleware,UserController.chekUser)

module.exports = router