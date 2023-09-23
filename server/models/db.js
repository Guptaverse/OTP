const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema(
  {
    otp:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
  }
);

const OTP = mongoose.model("otp", dbSchema);

module.exports = OTP;