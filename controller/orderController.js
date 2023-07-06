const asyncHandler=require("express-async-handler");
const order=require('../models/orderModel');
const orderItem=require("../models/orderItem");
const { where } = require("sequelize");

const getOrder= asyncHandler(async(req,res)=>{
    order=await order.findAll();
    //     {where:{
    //     ordered:false,
    //     userId:req.userId
    // }}
    
    res.status(200).json(order)
});



const createorder=asyncHandler(async(req,res)=>{
    console.log(req.user.userId)
    const{product_id,hello} = req.body;
    console.log('hello data is',product_id);
    if(!product_id){
        res.status(400).json({message:'error in data'})
    }
    //const new_oitem= await orderItem.create({})
    const new_order = await order.create({
        userId:1
    })
    res.status(201).json({new_order:'jj'})
});




module.exports={getOrder,createorder};