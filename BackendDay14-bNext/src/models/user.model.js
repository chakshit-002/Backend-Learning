const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
})

const userModel = mongoose.model('fullUserRev',userSchema);

module.exports = userModel;