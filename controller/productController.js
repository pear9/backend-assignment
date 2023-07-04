const getProduct=(req,res)=>{
    res.status(200).json({message:"all"})
};

const retrieveProduct=(req,res)=>{
    res.status(200).json({message:"retrieve"})
};
const createProduct=(req,res)=>{
    res.status(201).json({message:"create"})
};
const updateProduct=(req,res)=>{
    res.status(200).json({message:"update"})
};

const deleteProduct=(req,res)=>{
    res.status(200).json({message:"delete"})
};

module.exports={getProduct,updateProduct,createProduct,retrieveProduct,deleteProduct};