const mongoose = require("mongoose")

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Database connected Successfully")
    })
    .catch((err)=>{
        console.log("The error  is ",err)
    })
}

module.exports = connectDB;