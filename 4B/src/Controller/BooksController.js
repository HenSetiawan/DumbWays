const booksModel = require("../Models/BooksModel");
const fs = require("fs");
const path = require("path");

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
  const id = req.params.id;
  try {
    const book = await booksModel.findByPk(id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.json({ status: "500" }).status(500);
  }
};

exports.postBook = async (req, res) => {
  try {
    const filePath = req.file.path;
    const { name, stok, deskripsi, category_id } = req.body;
    const newBooks = await booksModel.create({
      id: Date.now(),
      name: name,
      stok: stok,
      image: filePath,
      deskripsi: deskripsi,
      category_id: category_id,
    });

    res.status(200).json(newBooks);
  } catch (error) {
    console.log(error);
    res.status(300).json(error.errors);
  }
};

exports.updateBook = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { name, stok, deskripsi, category_id } = req.body;
  const image = req.file.path;
  try {
    const bookData = await booksModel.findByPk(id);
    console.log("book data :", bookData);

    if (bookData.dataValues != null) {
      deleteImage(bookData.dataValues.image);
      await booksModel.update(
        { name, stok, image, deskripsi, category_id },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(201).json({
        msg: "data updated",
      });
    } else {
      res.status(404).json({
        msg: "data not found",
        data: bookData,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "data failed to update",
      err: error,
    });
  }
};

const deleteImage = (pathImage) => {
  const imagePath = `${path.join(__dirname, "../", "../", "/")}${pathImage}`;
  console.log(imagePath);
  fs.unlink(imagePath, (err) => {
    console.log(err);
    return;
  });
};
