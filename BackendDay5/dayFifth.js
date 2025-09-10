require('dotenv').config();
const express = require('express');
const connectDB = require('./src/db/db');


connectDB();

const app =  express();
app.use(express.json());
const phoneDets = [];
app.post('/phone',(req,res)=>{
    
    phoneDets.push(req.body);
    res.json({
        message: "Successfully added Phone Details",
        phone : phoneDets
    })
})

app.get('/phone',(req,res)=>{
    console.log(phoneDets)
    res.send(phoneDets)
})

app.listen(3000,()=>{
    console.log("My Servers  is active on 3000 port no.");
})