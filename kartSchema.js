const mongoose = require('mongoose')



const kartSchema = new mongoose.Schema({
    itemName:{
        type:String
    },
    itemPrice:{
        type:Number
    },
    userName:{
        type:String
    },
    addedAt:{
        type:String
    }
});

module.exports=kartSchema;