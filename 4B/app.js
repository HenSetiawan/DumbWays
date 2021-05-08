const express =require('express')
const app=express();
const booksRouter=require('./src/Router/BooksRouter');


app.use('/api/',booksRouter);

app.listen(3000,()=>{
    console.log(`server running on port 3000`)
})