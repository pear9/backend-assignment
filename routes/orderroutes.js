const express= require("express");
const router= express.Router();
const {createorder, getOrder}=require('../controller/orderController')

const validateToken=require('../middleware/validation');

//router.use(validateToken);
router.post('/addtocart',createorder);
router.get('/orders',getOrder);

module.exports=router;