const express=require('express')
const routes=express.Router()
const maincontroler= require('../controler/control')

routes.post('/post',     maincontroler.CreateUser)
routes.get('/get',       maincontroler.GetAllUsers)
routes.put('/put/:id',   maincontroler.FindUserById)
routes.delete('/del/:id',maincontroler.DeleteById)

module.exports= routes;
