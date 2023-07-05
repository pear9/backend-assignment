const asyncHandler=require("express-async-handler");
const Product =require('../models/productModel');

const getProduct= asyncHandler(async(req,res)=>{
    product=await Product.findAll();
    res.status(200).json({message:product})
});

const retrieveProduct=asyncHandler(async(req,res)=>{
    const product=await Product.findByPk(req.params.id)
    if (!product){
        res.status(400).json({message:'error in data'})
    }
    res.status(200).json(product)
});
const createProduct=asyncHandler(async(req,res)=>{
    const{name,description,price}=req.body;
    console.log('hello data is',req.body);
    if(!name || !description || !price){
        res.status(400).json({message:'error in data'})
    }
    const product = await Product.create({
        name:name,
        description:description,
        price:price,
    })
    res.status(201).json({product})
});
const updateProduct=asyncHandler(async(req,res)=>{
    const product = await Product.findByPk(req.params.id);
    if (!product){
        res.status(400).json({message:'error in data'})
    }
    const updated=await Product.update(req.body, {
        where: {
          id: req.params.id
        }
      });
    res.status(200).json(updated)
});

const deleteProduct=asyncHandler(async(req,res)=>{
    const product = await Product.findByPk(req.params.id);
    if (!product){
        res.status(400).json({message:'error in data'})
    }
    const deleteProduct =await Product.destroy({
        where: {
            id: req.params.id
          }
    });
    res.status(200).json({message:"delete"})
});

module.exports={getProduct,updateProduct,createProduct,retrieveProduct,deleteProduct};