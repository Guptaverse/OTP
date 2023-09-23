const otpGenerator = require('otp-generator')
const twilio = require("twilio")
// const OTP = require('./models/db')
const OTP = require('../models/db')
const accountSid = process.env.ACCOUNT_SID ;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

async function handleGenerateOTP(req,res){
    const generatedOTP =  otpGenerator.generate(6, { lowerCaseAlphabets:false,upperCaseAlphabets: false, specialChars: false });
    const phoneNumber = req.body.number;
    // console.log("ph.no : ",phoneNumber)
    console.log("hi :)")
    if(!phoneNumber){
        res.status(400).json({ error: "Phone Number is required" })
    }
    await OTP.create({
        otp: generatedOTP,
        phone: phoneNumber,
    });
    client.messages
    .create({
      body: `Your OTP is: ${generatedOTP}`,
      from: '+12564483440', // Replace with your Twilio phone number
      to: phoneNumber
    })
    .then(message => {
      console.log(`OTP sent to ${phoneNumber}`, message.sid);
    //   res.send({ message: "OTP sent successfully"});
    })
    .catch(error => {
      console.error("Error sending OTP:", error);
      return res.status(400).json({message:error});
    //   res.send({ error: "Failed to send OTP" });
    });

    return res.status(200).json({generatedOTP:generatedOTP});
}
async function handleVerify(req, res) {
    console.log("verify")
    const enteredOTP = req.body.enteredOTP;
    const phoneNumber = req.body.number;

    // Validate input data
    if (!enteredOTP) {
        return res.status(400).json({ error: "OTP is required" });
    }

    try {
        // Find a matching entry in the database based on OTP and phone number
        const entry = await OTP.findOne({ otp: enteredOTP, phone: phoneNumber });
        if (entry.otp===enteredOTP) {
            // Valid OTP
            return res.status(200).json({ valid: true });
        } else {
            // Invalid OTP
            return res.status(400).json({ valid: false });
        }
    } catch (error) {
        // Handle database or other errors
        console.error("Error verifying OTP:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports ={
    handleGenerateOTP,
    handleVerify
};