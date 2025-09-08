const  express = require("express");

const app = express();

app.get('/home',(req,res)=>{
    res.send("Hi we are at /home route");
})
app.listen(3000,()=>{
    console.log("My Server is Running on port no. 3000");
})