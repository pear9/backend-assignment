const express= require("express");
const router= express.Router();

const {register,login,getUser}=require('../controller/userController')
const validateToken = require("../middleware/validation")

router.post('/registration',register)
router.post('/login/',login)
router.get('/cuser/',validateToken,getUser)

module.exports=router