const mongoose = require('mongoose');

const OrderSchema=mongoose.Schema({
    
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'OrderItem',
        required:true
    }],
    shipingAddress1:{
        type:String,
        required:true
    },
    shipingAddress2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'Pending'
    },
    totalPrice:{
        type:Number,
    },
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User',
    // },
    dateOrdered:{
        type:Date,
        default:Date.now
    }
})


exports.Order= mongoose.model('Order',OrderSchema)