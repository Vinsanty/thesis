require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const path = require('path')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(express.json())
app.use(fileUpload({}))
app.use('/api',router)
app.use(errorHandler)


app.get('/',(req,res)=>{
    res.json({message:'Hello,World'})
})

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,'localhost', ()=>{
            console.log(`Server started on ${PORT}`)
        })
    }
    catch(e){
        console.log(e)
    }
}


start()