const express= require('express')
const router= express.Router();
const {User}= require('../models/user');
const mongoose=require('mongoose')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')


// get all user without there password
router.get('/',async (req,res)=>{

    const user= await User.find().select('-passwordHash')
    res.send(user)

})

// get specific user
router.get('/:id',async (req,res)=>{

    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(500).send('invalid id format')
    }
    const user= await User.findById(req.params.id)

    if(!user)
    return res.status(404).json({status:false, message:'invalid user id'})
    
    return res.send(user)

})

// register user to db
router.post('/register',async (req,res)=>{

    let user=new User({
        name:req.body.name,
        email:req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password,10),
        phone:req.body.phone,
        isAdmin:req.body.isAdmin,
        isUser:req.body.isUser,
        street:req.body.street,
        city:req.body.city,
        apartment:req.body.apartment,
        zip:req.body.zip,
        country:req.body.country
    })

    user= await user.save();
    
    if(!user)
    return res.status(404).send(' user not saved')

    res.send(user)

})

// autheticate user

router.post('/login', async(req,res)=>{
    const user= await User.findOne({email:req.body.email})
    const secret= process.env.SECRET
    if(!user){
        return res.status(400).send('invalid email')
    }
    if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
        const token= jwt.sign(
            {
                userId:user.id,
                isAdmin:user.isAdmin,
                isUser:user.isUser
            },
            secret,
            {expiresIn:'1d'}
        )
        return res.status(200).send({user:user.email, token:token})
    }
    else{
        return res.status(400).send('wrong password')
     }
    
})

// del user 

router.delete('/:id',async (req,res)=>{
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }

    const user= await User.findByIdAndDelete(req.params.id);

    if(!user)
    return res.status(404).json({success:false, message:'user not found'})
    
    return res.status(200).json({success:true, message:'deleted successfully'})
})

module.exports=router