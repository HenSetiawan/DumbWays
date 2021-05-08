const booksModel = require("../Models/BooksModel");

exports.getAllBooks = async (req, res) => {
  try {
    const book = await booksModel.findAll();
    res.json(book);
  } catch (error) {
    console.log(error);
    res.json({ status: "500" }).status(500);
  }
};
