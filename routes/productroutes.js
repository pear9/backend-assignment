const express= require("express");
const router= express.Router();

const {getProduct,updateProduct,createProduct,retrieveProduct,deleteProduct} =require('../controller/productController');

router.route('').get(getProduct).post(createProduct);
router.route('/:id').get(retrieveProduct).put(updateProduct).delete(deleteProduct);




module.exports=router;