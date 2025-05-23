const { type } = require('express/lib/response')
const mongoose = require('mongoose') 
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("adminUser",UserSchema)