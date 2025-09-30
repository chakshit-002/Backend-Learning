const  express = require('express')

const  userModel = require('../models/user.model')

const router = express.Router();


router.post('/register',async (req,res)=>{
    const  {username,password} = req.body

    const user = await userModel.create({
        username,password
    });

    res.json({
        message:"User Registered successfully",
        user
    })
})

router.post('/login',async(req,res)=>{
    const {username,password} = req.body;

    const isUser = await userModel.findOne({
        username:username
    })

    if(!isUser){
        return res.status(401).json({
            message:"User not  found  invalid username"
        })
    }

    const isPasswordCorrect = password ==  isUser.password;
    if(!isPasswordCorrect){
        return res.status(401).json({
            message:"Password incorrect"
        })
    }

    res.status(200).json({
        message:"user LoggedIn successfully"
    })
})
module.exports = router;