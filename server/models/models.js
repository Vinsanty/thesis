const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:'USER'}
})

const Basket = sequelize.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

const BasketDevice = sequelize.define('basket_device',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    
})

const Device = sequelize.define('device',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING},
    rating:{type:DataTypes.INTEGER,defaultValue:0},
})

const Type = sequelize.define('type',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
    EN:{type:DataTypes.STRING,unique:true}
   
})

const Brand = sequelize.define('brand',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false}
})

const Rating = sequelize.define('rating',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    rate:{type:DataTypes.INTEGER, allowNull:false}
})

const DeviceInfo = sequelize.define('device_info',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING,allowNull:false}
})

const TypeBrand = sequelize.define('type_brand',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true}
})

const Reviews = sequelize.define('reviews',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    review: {type: DataTypes.STRING, allowNull:false},
    userName:{type: DataTypes.STRING, allowNull:false}
})

const Orders = sequelize.define('orders', {
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    address: {type:DataTypes.STRING,allowNull:false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

BasketDevice.hasOne(Device)
Device.belongsTo(BasketDevice)

Device.hasOne(Type)
Type.belongsTo(Device)

Device.hasOne(Brand)
Brand.belongsTo(Device)

Device.hasMany(DeviceInfo, {as:'info'})
DeviceInfo.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Type.belongsToMany(Brand, {through:TypeBrand})
Brand.belongsToMany(Type,{through:TypeBrand})

User.hasOne(Reviews)
Reviews.belongsTo(User)

Device.hasOne(Reviews)
Reviews.belongsTo(Device)

User.hasMany(Orders)
Orders.belongsTo(User)

Device.hasMany(Orders)
Orders.belongsTo(Device)


module.exports = {
    User,
    Device,
    Basket,
    DeviceInfo,
    BasketDevice,
    Type,
    Brand,
    Rating,
    TypeBrand,
    Reviews,
    Orders
}