const {BasketDevice} = require('../models/models')


class BasketContoller {
    async addItem(req,res){
        const {basketId,deviceId} = req.body
        const basketDevice = await BasketDevice.create({basketId,deviceId})
        return res.json(basketDevice)

    }

    async getItem(req,res){
        const {basketId} = req.query
        let basket
        if(basketId){
            basket = await BasketDevice.findAll({where:{basketId}})
        }else{
            res.json({message:'Необходимо авторизоваться'})
        }
        
        res.json(basket)
    }

    async deleteItem(req,res){
        const {basketId,deviceId} = req.query
        let deleted = await BasketDevice.destroy({where:{basketId,deviceId}})
        res.json(deleted)
    }
}


module.exports = new BasketContoller()