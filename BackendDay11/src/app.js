const express = require("express");
const indexRoutes =  require('./routes/index.routes')

const app = express();

app.use((req,res,next)=>{
    console.log("This is the middleware btw the application and  the route")
    next();
})

app.use('/',indexRoutes);

module.exports = app;