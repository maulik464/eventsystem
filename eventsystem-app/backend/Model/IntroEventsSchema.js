const { type } = require('express/lib/response')
const mongoose = require('mongoose') 
const IntroEvents = mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    youtubelink:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("introevents",IntroEvents)