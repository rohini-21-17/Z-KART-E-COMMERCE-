const mongoose = require('mongoose')



const orderSchema = new mongoose.Schema({
    orderId:{
        type:Number
    },
    userName:{
        type:String
    },
    orderedDate:{
        type:String
    },
    itemName:{
        type:String
    },
    itemPrice:{
        type:Number
    },
    paymentMethod:{
        type:String
    }
});

module.exports=orderSchema;