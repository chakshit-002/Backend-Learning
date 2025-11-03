const express = require('express');
const userModel = require("../models/user.model");
const jsonweb = require("jsonwebtoken")
 
const router = express.Router();

router.post("/register",async (req,res)=>{
    const {username,password} = req.body;

    const isUserExists = await userModel.findOne({
        username
    })
    if(isUserExists){
        return res.status(409).json({
            message:"User already Exists"
        })
    }
    const user  = await userModel.create({
        username,
        password
    })

   const token = jsonweb.sign({
        id:  user._id
   },process.env.JWT_SECRET)

   res.cookie('token',token,{
    expires:new Date(Date.now()+1000*7*60*60*24)
   })

   res.status(200).json({
    message: "User Registered Successfully!",
    user
   })
})

router.get("/user",async (req,res)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unauthorized user token"
        })
    }

    try{
        const decode = jsonweb.verify(token,process.env.JWT_SECRET)
        const user  = await userModel.findOne({
              _id:decode.id
        }).select("-password -__v") 

        res.status(200).json({
            message:"user data fetched Successfully",
            user
        })

    }
    catch(err){
        res.status(401).json({
            message:"invalid token"
        })
    }
})

module.exports= router