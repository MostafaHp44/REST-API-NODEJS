// 1)-get or import library 
const express =require('express')
const mongoose= require('mongoose')
const dotenv= require('dotenv')
const app=express()
const routerapp=require('./routes/routes.js')


// 2)- use own app
app.use(express.json())
app.use('/', routerapp)


dotenv.config({
    path:'./config.env'
})


// 3)-connect to mongodb 
mongoose.connect(process.env.MYURL,{
     useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(()=>{console.log('Data  is connect ')}).catch((err)=>{console.log(err)})

app.listen(4000,()=>{console.log('Poot is lestien......!!!')})