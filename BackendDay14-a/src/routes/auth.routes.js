const express = require('express');
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = await userModel.create({
        username, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie(token);

    res.status(201).json({
        message: "user registered successfully",
        user,
    })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const isUser = await userModel.findOne({
        username: username
    })

    if (!isUser) {
        return res.status(401).json({
            message: "invalid username , User not found"
        })
    }

    const isCorrectPassword = password == isUser.password
    if (!isCorrectPassword) {
        return res.status(401).json({
            message: "invalid credentials"
        })
    }

    res.status(201).json({
        message: "user loggedIn successfully"
    })
})

router.get('/user', async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
            message: "Unauthroized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({
            _id: decoded.id
        }).select("-password -__v")

        res.status(200).json({
            message: "user Data fetched successfully",
            user
        })
    }
    catch (err) {
        return res.status(401).json({
            message: "Unauthorized-Invalid Token"
        })
    }
})

module.exports = router;