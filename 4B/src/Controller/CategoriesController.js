
const categoriesModel = require("../Models/CategoriesModel");

exports.getAllCategories=async (req,res)=>{
    try {
        const book = await categoriesModel.findAll();
        res.json(book);
      } catch (error) {
        console.log(error);
        res.json({ status: "500" }).status(500);
      }
}