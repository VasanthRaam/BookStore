const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/BookStore');

const BookSchema = new mongoose.Schema({
    BookTitle:String,
    ISBN:Number,
    Author:String,
    Category:String,
    Quantity:Number,
});

const Books = mongoose.model('Books',BookSchema);

//Routes

//Fetching Books

app.get('/books',async(req,res,next)=>{
    try{
        const books = await Books.find({});
        res.status(201).json(books);
    }
    catch(error){
        console.log("Error Fetching Items");
    }
})

//Adding Books

app.post('/books',async(req,res,next)=>{
    const book = new Books(req.body);
    try{
        const newBooks = await book.save();
        res.status(201).json(newBooks);
    }
    catch(error){
        console.log("Error Adding Items");
    }
})

//Search a Book

app.get('/search/:id',async(req,res,next)=>{
    const isbn = req.params.id;
    try{
        const details = await Books.findOne({ISBN:isbn});
        res.status(201).json(details);
    }
    catch(error){
        console.log("Error Adding Items");
    }
})

//Delete a Book

app.delete('/delete/:id',async(req,res,next)=>{
    const isbn = req.params.id;
    try{
        const details = await Books.findOne({ISBN:isbn});
        await Books.findByIdAndDelete(details._id);
        res.status(201).json("Deleted");
    }
    catch(error){
        console.log("Error Adding Items");
    }
})

app.listen(8000,()=>{
    console.log("Server is Running")
})