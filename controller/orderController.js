const asyncHandler=require("express-async-handler");
const order=require('../models/orderModel');
const orderItem=require("../models/orderItem");
const Product = require("../models/productModel")
const { where } = require("sequelize");

const getOrder= asyncHandler(async(req,res)=>{
    const {userId}=req.user
    const order_id= await order.findOne({where:{userId:userId,ordered:false}})
    if(!order_id){
        res.status(400).json({message:'empty cart'})
    }
    console.log(order_id.id)
   const new_order=await orderItem.findAll(
        {where:{
        orderId:order_id.id,
    }}
    );
    if(!new_order){
        res.status(400).json({message:'empty cart'})
    }
    res.status(200).json(new_order)
});

const deleteOrder= asyncHandler(async(req,res)=>{
    const {userId}=req.user
    const torder= await order.findOne({where:{userId:userId,ordered:false}})
    console.log(torder)
    const order_item= await orderItem.destroy({where:{orderId:torder.id}})
    res.status(200).json({message:'deleted'})
});


const changeOrder= asyncHandler(async(req,res)=>{
    const {userId}=req.user
    const t_order = await order.findOne({where:{
        userId:userId
    }})
    const uorder=await order.update({ordered:true},{where:{id:t_order.id}})
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
    const NNew_oitem=await orderItem.findOne({where:{
        productId:product_id
    
    }})
    if(NNew_oitem){
        const new_oitem=await orderItem.destroy({where:{
            productId:product_id
        
        }})
        const tnew_oitem= await orderItem.create({
            productId:product_id,
            quantity:quantity,
            orderId:new_order.id,
            price:product.price
            
        })
        console.log(tnew_oitem)
        res.status(201).json(new_oitem)
    }
    else{
    
    const new_oitem= await orderItem.create({
        productId:product_id,
        quantity:quantity,
        orderId:new_order.id,
        price:product.price
        
    })
    res.status(201).json(new_oitem)}
});







module.exports={getOrder,createorder,changeOrder,deleteOrder};