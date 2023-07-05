const express= require("express");
const router= express.Router();

const {register,login,getUser}=require('../controller/userController')

router.post('/registration',register)
router.route('/login/').post(login)
router.route('/cuser/').get(getUser)

module.exports=router