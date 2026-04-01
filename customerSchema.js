const mongoose = require('mongoose')



const customerSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:Number
    }
});

module.exports=customerSchema;