const uuid = require('uuid')
const path = require('path')
const {Device,DeviceInfo} = require('../models/models')


class DeviceController{

    async getDevice(req,res){
        const {id} = req.params
        const device = await Device.findOne({
            where:{id},
            include:[{model:DeviceInfo, as:'info'}]
        })
        return res.json(device)
    }

    async getAllDevices(req,res){
        const {brandId,typeId} = req.query
        let devices
        if (!brandId && !typeId){
            devices = await Device.findAndCountAll()
        }else if (brandId && !typeId){
            devices = await Device.findAndCountAll({where:{brandId}})
        }else if (!brandId && typeId){
            devices = await Device.findAndCountAll({where:{typeId}})
        }else if (brandId && typeId){
            devices = await Device.findAndCountAll({where:{brandId,typeId}})
        }
        return res.json(devices)
    }

    async createNewDevice(req,res,next){
        let {name,price,brandId,typeId,info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const device = await Device.create({name,price,brandId,typeId, img:fileName})
    
        if(info){
            info = JSON.parse(info)
            info.map(i=> DeviceInfo.create({
                title:i.title,
                description: i.description,
                deviceId: device.id
            }))
            
        }

        res.json(device) 
      
    }

    async deleteDevice(req,res){
        let {id} = req.query
        let device = await Device.destroy({where:{id}})
        return res.json(device)
    }
}

module.exports = new DeviceController()