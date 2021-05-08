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

exports.getBookById = async (req, res) => {
 const id=req.params.id;
  try {
    const book = await booksModel.findByPk(id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.json({ status: "500" }).status(500);
  }
};
