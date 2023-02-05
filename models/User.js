// 1)- import mongoose
const mongoose=require('mongoose')

// 2)- create Schema 
const userschema= new mongoose.Schema({
    Firstname:{
        type:String
    },
    Lastname:{
        type:String
    },
    Email:{
        type:String
    },

     age:{
        type:Number
    },
    
   
})

module.exports= mongoose.model('userstore',userschema)