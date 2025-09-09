const  express = require('express');

const app = express();

app.use(express.json());

let questions = [];
app.post('/question',(req,res)=>{

    console.log(req.body);

    questions.push(req.body);
    res.json({
        message : "questions send  succesfully",
        questions: questions
    })


})


app.listen(3000,()=>{
    console.log("My  server is running on portno. 3000");
})