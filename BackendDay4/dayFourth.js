const express = require('express');

const app = express();


app.use(express.json());

const bookDetails = [];

app.post('/bookDet',(req,res)=>{
    console.log(req.body)
    bookDetails.push(req.body);
    res.json({
        message:"Send Successfully",
        Book_Details: bookDetails
    })
})

app.get('/bookDet',(req,res)=>{
    res.json(bookDetails);
})

app.patch('/bookDet/:bookIndex',(req,res)=>{

    const bookIndex = req.params.bookIndex;
    const  {bookTitle}  = req.body;

    bookDetails[bookIndex].bookTitle = bookTitle;
    res.json({
        message:"Updated Successfully",
        Book_Details:bookDetails
    })

})

app.delete('/bookDet/:bookIndex',(req,res)=>{
    const bookIndex = req.params.bookIndex;
    delete bookDetails[bookIndex];

    res.json({
        message:"Deleted  Successfully!"
    })
})

app.listen(3000,()=>{
    console.log("My Server is Running on 3000 port")
})