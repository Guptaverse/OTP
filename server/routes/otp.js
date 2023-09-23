const express = require('express')
const router = express.Router();
const {handleGenerateOTP, handleVerify}= require('../controllers/otp')

router.post("/",handleGenerateOTP);
router.post("/verify",handleVerify);
module.exports=router;