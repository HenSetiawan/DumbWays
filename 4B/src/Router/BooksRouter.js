const express = require("express");
const booksRouter = express.Router();
const BooksController = require("../Controller/BooksController");

booksRouter.get("/v1/books", BooksController.getAllBooks);
booksRouter.get("/v1/books/:id", BooksController.getBookById);
module.exports = booksRouter;
