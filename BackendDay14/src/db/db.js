const  mongoose = require('mongoose')

function connectDB (){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected successfully DB")
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports = connectDB
