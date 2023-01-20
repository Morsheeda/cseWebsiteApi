const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false
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
    department:{
        type:String,
        default:""
    },
    batch:{
        type:String,
        default:""
    },
    roll:{
        type:String,
        default:""
    },
    fbLink:{
        type:String,
        default:""
    },
    twitterLink:{
        type:String,
        default:""
    },
    linkedinLink:{
        type:String,
        default:""
    },
    
},
{timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);