const express=require('express');
const booksRouter=express.Router();


booksRouter.get('/v1/books',Bookscontroller.getAllBooks);