const Router = require('express')
const router = new Router()
const ReviewsController = require('../controllers/reviewsController')



router.post('/',ReviewsController.createReview)
router.get('/device_reviews',ReviewsController.getAllDeviceReviews)

module.exports = router