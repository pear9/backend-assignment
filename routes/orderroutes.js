const express= require("express");
const router= express.Router();
const {createorder, getOrder,changeOrder,deleteOrder}=require('../controller/orderController')

const validateToken=require('../middleware/validation');

router.use(validateToken);
router.post('/addtocart',createorder);
router.get('/orders',getOrder);
router.put('/update',changeOrder);
router.get('/delete',deleteOrder);

module.exports=router;