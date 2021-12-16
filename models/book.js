const mongoose = require('mongoose');


// before pushing data to db we design schema , that is called as collections in mongo and 
// model in node js

const BookSchema=mongoose.Schema({

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    bookName:{
        type: String,
        required:true
    },
    publisherName:{
        type: String,
        required:true
    },
    authorName:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    releasedDate:{
        type:Date,
        default:Date.now
    },
    price:{
        type:Number,
        required:true

    },
    deliveryTime:{
        type:String,
        default:'14 days'
    },
    award:{
        type:String,
        default:''

    }
})

// above we define schema now we create obj ie is model

exports.Book= mongoose.model('Book',BookSchema)