const mongoose = require('mongoose');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passwordHash:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isUser:{
        type:Boolean,
        default:true
    },
    street:{
        type:String,
        default:''
    },
    city:{
        type:String,
        default:''
    },
    apartment:{
        type:String,
        default:''
    },
    zip:{
        type:String,
        default:''
    },
    country:{
        type:String,
        default:''
    }

})

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true,
});

exports.User= mongoose.model('User',UserSchema)