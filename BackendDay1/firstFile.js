const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello ji kya haal chaal  hai , This is first day of backend!")
});

server.listen(3000,()=>{
    console.log("My server is running on 3000 port no.")
})