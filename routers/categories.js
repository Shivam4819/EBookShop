const express= require('express')
const router= express.Router();
const {Category}= require('../models/category');
const mongoose= require('mongoose')


// get all category from db 
router.get('/',async (req,res)=>{
    const category= await Category.find()
    res.send(category)

})

// save category to db
router.post('/',async (req,res)=>{

    let category=new Category({
        name:req.body.name,
    })

    category= await category.save();
    
    if(!category)
    return res.status(404).send(' category not created')

    res.send(category)

})

// del category
router.delete('/:id',async (req,res)=>{
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }

    const category= await Category.findByIdAndDelete(req.params.id);

    if(!category)
    return res.status(404).json({success:false, message:'not found'})
    
    return res.status(200).json({success:true, message:'deleted successfully'})
})

// get prticular category

router.get('/:id', async (req,res)=>{
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }

    const category= await Category.findById(req.params.id)

    if(!category)
    return res.status(404).json({status:false, message:"category not present"})

    return res.send(category)
})

// update category based on id

router.put('/:id',async (req,res)=>{
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }

    const category= await Category.findByIdAndUpdate(
        req.params.id,
        {
            name:req.body.name,
        },
        {new:true}
    )

    if(!category)
    return res.status(404).json({status:false,message:'category not found'})

    return res.send(category)
})

module.exports=router