const express= require('express')
const router= express.Router();
const {Order}= require('../models/order');
const {OrderItem}= require('../models/order-item');
const mongoose= require('mongoose');

// get all order
router.get('/',async(req,res)=>{
    const order= await Order.find()
    // it sort the data from new created to oldest created
    // const order= await Order.find().populate('User').sort({'dateCreated':-1})
    if(!order)
    return res.status(401).json({status:false,message:'no order it cart'})

    return res.send(order)
})

// get specific order
router.get('/:id',async(req,res)=>{
    const order= await Order.findById(req.params.id)
    .populate({path:'orderItems', populate:{path:'book', populate:'category'}})
   
    if(!order)
    return res.status(401).json({status:false,message:'no order it cart'})

    return res.send(order)
})

//place new order
router.post(`/`,async (req,res)=>{

    const orderItemsIds= Promise.all(req.body.orderItems.map(async (orderItem)=>{
        
        let newOrderItem= new OrderItem({
            quantity:orderItem.quantity,
            book:orderItem.book
        })
        newOrderItem= await newOrderItem.save();

        return newOrderItem._id
    }))
    const orderItemsIdsResolved= await orderItemsIds

    // cal total price
    const totalPrices = await Promise.all(orderItemsIdsResolved.map(async (orderItemId)=>{
        const orderItem = await OrderItem.findById(orderItemId).populate('book', 'price');
        const totalPrice = orderItem.book.price * orderItem.quantity;
        return totalPrice
    }))

    const totalPrice = totalPrices.reduce((a,b) => a +b , 0);

    let order=new Order({
        orderItems:orderItemsIdsResolved,
        shipingAddress1:req.body.shipingAddress1,
        shipingAddress2:req.body.shipingAddress2,
        city:req.body.city,
        zip:req.body.zip,
        country:req.body.country,
        phone:req.body.phone,
        status:req.body.status,
        totalPrice:totalPrice,
        // user:req.body.user
    })

    order= await order.save()
    
    if(!order) return res.status(404).json({status:false,message:'order not created'})

    return res.send(order)
})

// update order status
router.put('/:id', async(req, res)=>{
    
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('invalid id type')
    }
    const order= await Order.findByIdAndUpdate(
        req.params.id,{
            status:req.body.status
           
        },
        {new:true}
    )
    if(!order)
    return res.status(404).json({status:false,message:'invalid id'})

    return res.send(order)
})

// create del api
module.exports=router