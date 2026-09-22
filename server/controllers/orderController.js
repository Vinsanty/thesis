const {Orders} = require('../models/models')



class OrderController {
    async createOrder(req,res) {
        let {address,userId,deviceId} = req.body
        let order = await Orders.create({address,userId,deviceId})
        return res.json(order)
    }

    async getUserOrders (req,res) {
        let {userId} = req.query
        let order = await Orders.findAll({where:{userId}})
        return res.json(order)
    }

    async getAllOrders(req,res){
        let orders = await Orders.findAll()
        return res.json(orders)
    }

}


module.exports = new OrderController()