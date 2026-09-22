const {User,Basket} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const generateJWT = function (id,email,role){
    return jwt.sign(
        {id:id,email:email,role:role}, 
        process.env.SECRET_KEY,
        {expiresIn:'24h'})
}


class UserController{
    async registration(req,res){
        const {email,password,role} = req.body
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return res.json('Пользователь с таким email уже существует')
        }

        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email,role,password:hashPassword})
        const basket = await Basket.create({userId:user.id})
        const token = generateJWT(user.id,user.email,user.role)
        return res.json(user)
    }

    async login(req,res){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return res.json('Пользователь с таким email не найдет')
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return res.json('Неверный пароль')
        }
        const token = generateJWT(user.id,user.email,user.role)
        return res.json(user)

    }

    async chekUser(req,res){
        const token = generateJWT(req.user.id,req.user.email,req.user.role)
        return res.json({token})
    }
}


module.exports = new UserController()