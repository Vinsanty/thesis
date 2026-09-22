const {Reviews} = require('../models/models')



class ReviewsController {
    async createReview(req,res){
        const {text,userId,deviceId,userName} = req.body
        let review = await Reviews.create({review:text,userId,deviceId,userName})
        res.json(review)
    }

    async getAllDeviceReviews(req,res){
        const {deviceId} = req.query
        const reviews = await Reviews.findAll({where:{deviceId}})
        res.json(reviews)
    }
}

module.exports = new ReviewsController()