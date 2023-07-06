const asyncHandler=require("express-async-handler");
const order=require('../models/orderModel');
const orderItem=require("../models/orderItem");
const Product = require("../models/productModel")
const { where } = require("sequelize");

const getOrder= asyncHandler(async(req,res)=>{
    const {userId}=req.user
   const new_order=await order.findAll(
        {where:{
        ordered:false,

    }});
    if(!new_order){
        res.status(400).json({message:'no order'})
    }
    const updated=await order.update({ordered:true}, {
        where: {
          id: req.params.id
        }
      });
    res.status(200).json(new_order)
});


const changeOrder= asyncHandler(async(req,res)=>{
    const {userId}=req.user
    const t_order = await order.findOne({where:{
        userId:userId
    }})
    
    const items = await orderItem.findAll({where:{
        orderId:order.id
    }})
//    const newchangeOrder=await order.update(req.body,
//         {where:{
//         userId:userId,
//         ordered:false,
//     }});

    
    res.status(200).json(items)
});
const createorder=asyncHandler(async(req,res)=>{
    //console.log('user is',req.user.userId)
    console.log(req.user)
    const {userId}=req.user
    console.log(userId)
    const{product_id,quantity} = req.body;
    console.log('hello data is',product_id);
    if(!product_id){
        res.status(400).json({message:'error in data'})
    }
    const product=await Product.findByPk(product_id)
    const new_order=await order.findOne({where:{
        userId:userId,
        ordered:false,
    }})
    if (!new_order){
        const new_order = await order.create({
        userId:userId
    })
    }
    
    console.log(new_order.id,product_id)
    const new_oitem= await orderItem.create({
        productId:product_id,
        quantity:quantity,
        orderId:new_order.id,
        price:product.price
        
        
    })
    res.status(201).json(new_oitem)
});







module.exports={getOrder,createorder,changeOrder};