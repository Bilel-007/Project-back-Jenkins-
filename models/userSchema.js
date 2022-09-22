const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema= new Schema({
    fname:{
        required:true,
        type:String
    },
    lname:{
        required:true,
        type:String
    },
    address:String,
    phonenumber:Number,
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("User",userSchema)