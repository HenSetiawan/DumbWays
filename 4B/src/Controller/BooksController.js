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

exports.postBook=async (req,res)=>{
    try {
        const filePath=req.file.path;
        const {name,stok,deskripsi,category_id}=req.body;
        const newBooks=await booksModel.create({
            id:Date.now(),
            name:name,
            stok:stok,
            image:filePath,
            deskripsi:deskripsi,
            category_id:category_id
        });

        res.status(200).json(newBooks);
    } catch (error) {
        console.log(error);
        res.status(300).json(error.errors);
    }
}
