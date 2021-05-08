const categoriesModel = require("../Models/CategoriesModel");

exports.getAllCategories = async (req, res) => {
  try {
    const book = await categoriesModel.findAll();
    res.json(book);
  } catch (error) {
    console.log(error);
    res.json({ status: "500" }).status(500);
  }
};

exports.postNewCategories = async (req, res) => {
  try {
    const name = req.body.name;
    const newCategories = await categoriesModel.create({
      id: Math.floor(Math.random() * 100),
      name: name,
    });

    res.status(200).json(newCategories);
  } catch (error) {
    console.log(error);
    res.status(300).json(error.errors);
  }
};

exports.deleteCategory = async (req, res) => {
  const id = req.params.id;
  const datacategories = categoriesModel.findByPk(id);
  console.log(datacategories.dataValues);
  if (datacategories.dataValues !== undefined) {
    try {
      const category = await categoriesModel.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        msg: "success",
        data: category,
      });
    } catch (error) {
      console.log(error);
      res.status(300).json(error.errors);
    }
  } else {
    res.status(404).json({
      msg: "not found",
    });
  }
};
