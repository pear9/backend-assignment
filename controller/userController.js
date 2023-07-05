const asyncHandler=require("express-async-handler");
const user=require('../models/userModel');


const getUser= asyncHandler(async(req,res)=>{
    res.status(200).json({message:'user'})
});

const register= asyncHandler(async(req,res)=>{
    res.status(200).json({message:'register'})
});

const login= asyncHandler(async(req,res)=>{
   
    res.status(200).json({message:'login'})
});

module.exports={getUser,register,login};