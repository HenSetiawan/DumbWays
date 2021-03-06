const express = require("express");
const booksRouter = express.Router();
const BooksController = require("../Controller/BooksController");

booksRouter.get("/v1/books", BooksController.getAllBooks);
booksRouter.post("/v1/book", BooksController.postBook);
booksRouter.delete("/v1/book/:id",BooksController.DeleteBook);
booksRouter.patch("/v1/book/:id", BooksController.updateBook);
booksRouter.get("/v1/book/:id", BooksController.getBookById);
module.exports = booksRouter;
