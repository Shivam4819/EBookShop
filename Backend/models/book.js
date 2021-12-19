const mongoose = require('mongoose');

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
        type: String
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
BookSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

BookSchema.set('toJSON', {
    virtuals: true,
});

exports.Book= mongoose.model('Book',BookSchema)