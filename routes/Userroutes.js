const express= require("express");
const router= express.Router();

const {register,login,getUser}=require('../controller/userController')

router.route('/registration').post(register)
router.route('/login/').post(login)
router.route('/cuser/').get(getUser)

module.exports=router