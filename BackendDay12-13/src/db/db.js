const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONOGODB_URL)
    .then(()=>{
        console.log("Database Connected")
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports = connectDB