const express=require('express')
const router=express.Router()
const {regdata,getproduct}=require("../controller/data")


router.post('/',regdata)
router.get('/',getproduct)

module.exports=router