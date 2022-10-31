const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false
    },
    department:{
        type:String,
        required:true,
        unique:false
    },
    batch:{
        type:String,
        required:true,
        unique:false
    },
    roll:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    },
    
},
{timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);