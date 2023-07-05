const asyncHandler=require("express-async-handler");
const user=require('../models/userModel');
const jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt');

//get
const getUser= asyncHandler(async(req,res)=>{
    
    res.status(200).json({message:'user'})
});
//post
const register= asyncHandler(async(req,res)=>{
    const {email,fullName,contact_no,password}= req.body;

    if(!email||!fullName||!contact_no||!password){
        res.status(400).json({message:'data wrong'})
    }
    const hashed_pwd=await bcrypt.hash(password,10)
    const avaiable_user= await user.findOne({email})
    if(avaiable_user){
        res.status(400).json({message:'email aready used'})
    }

    const newuser=await user.create({
        email,
        fullName,
        contact_no,
        password:hashed_pwd
    })
    res.status(201).json(newuser)
});


//login
const login= asyncHandler(async(req,res)=>{
    const {email,password}= req.body;

    if(!email||!password){
        res.status(400).json({message:'data wrong'})
    }
    
    const avaiable_user= await user.findOne({email})
    if(avaiable_user){
        if (avaiable_user && await bcrypt.compare(password,avaiable_user.password)){
            const payload = {
                userId: avaiable_user.id,
                email: avaiable_user.email
              };
              const accessToken = jwt.sign(payload, process.env.secretKey, { expiresIn: '1h' });
              res.status(200).json(accessToken)
        }
        else{
            res.status(400).json({message:'wrong pwd'})
        }
    }
    res.status(200).json({message:'login'})
});

module.exports={getUser,register,login};