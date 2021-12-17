const express= require('express')
const router= express.Router();
const {Book}= require('../models/book');
const {Category}= require('../models/category');
const mongoose= require('mongoose');
const req = require('express/lib/request');


// get all books from db

router.get(`/`,async (req,res)=>{

    // this populate category with only name
    const book=await Book.find().populate('category','name')
    // const book=await Book.find().populate('category','name -_id')
    
    res.send(book)
})

// get particular book from db
router.get('/:id',async (req,res)=>{

    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }
    
    const book= await Book.findById(req.params.id).populate('category')

    if(!book) return res.status(404).json({status:false,message:'invalid id'})

    return res.send(book)
})

// add new product to db
router.post(`/`,async (req,res)=>{

    const category= await Category.findById(req.body.category);

    if(!category) 
    return res.status(400).send('category not present');

    let newbook=new Book({
        category:req.body.category,
        bookName:req.body.bookName,
        publisherName:req.body.publisherName,
        authorName:req.body.authorName,
        description:req.body.description,
        price:req.body.price,
        deliveryTime:req.body.deliveryTime,
        award:req.body.award,
    })

    newbook= await newbook.save()
    
    if(!newbook) return res.status(404).json({status:false,message:'book not created'})

    return res.send(newbook)
})

// del book
router.delete('/:id', async(req,res)=>{
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }
    const book= await Book.findByIdAndDelete(req.params.id)

    if(!book)
    return res.status(404).json({status:false,message:'book can not be deleted'})

    return res.status(200).json({status:true,message:'book is deleted'})

})

// update book
router.put('/:id', async(req, res)=>{
    
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }
    const book= await Book.findByIdAndUpdate(
        req.params.id,{
            price:req.body.price,
            deliveryTime:req.body.deliveryTime,
            award:req.body.award,
        },
        {new:true}
    )
    if(!book)
    return res.status(404).json({status:false,message:'invalid id'})

    return res.send(book)
})


module.exports= router