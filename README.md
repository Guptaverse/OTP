# OTP-APP


Here is video demonstration of this project .

![Video](./server/gifs/AdmitKard.gif)

Here is the OTP message recieved on my mobile Phone number registered with Twilio
![OTP Message]()
<p align="center">
  <img src="./server/gifs/messageOTP.jpeg" alt="Alt Text" width="500px" height="700px">
</p>


## Tech Stack

- **Client-side (Frontend)**: React.js, Antd
- **Server-side (Backend)**: Node.js, Express.js
- **Database**: MongoDB

## Overview

This is an OTP (One-Time Password) application built using React.js for the frontend and Node.js with Express.js for the backend. It uses MongoDB as the database for storing OTPs. The application allows users to enter their phone numbers, receive OTPs via Twilio, and verify the OTPs they receive.

## Guidelines

### Backend Server

1. Ensure that the backend local server is running on port 5000. You can configure your backend server to run on this port.
   
### Twilio Setup

![Twilio Setup](./server/gifs/twilio.gif)
2. This application uses Twilio to send OTPs to mobile numbers. To use your own Twilio account, follow these steps:

   - **Register Your Phone Number**: Since Twilio provides limited free services, you need to register your own phone number to receive OTPs. Here's how:
     (a) Create your Twilio Caller ID, which will be displayed on the dashboard.
     (b) Under "Verified Caller IDs," add your phone number to receive OTPs.

3. Replace the following values in the `server/controllers/otp.js` file:

   ```javascript
   const accountSid = "Your Twilio Account SID";
   const authToken = "Your Twilio Auth Token";



