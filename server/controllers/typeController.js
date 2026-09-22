const {Type} = require('../models/models')

class TypeController {
    async getTypes(req,res){
        const type = await Type.findAll()
        return res.json(type)
    }

    async createNewType(req,res){
        const {name,EN} = req.body
        const type = await Type.create({name,EN})
        return res.json(type)
    }
} 


module.exports = new TypeController()