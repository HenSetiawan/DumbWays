const express = require("express");
const CategoriesRouter = express.Router();
const CategoriesController = require("../Controller/CategoriesController");

CategoriesRouter.get("/v1/categories", CategoriesController.getAllCategories);
CategoriesRouter.post("/v1/categories", CategoriesController.postNewCategories);
CategoriesRouter.delete(
  "/v1/categories/:id",
  CategoriesController.deleteCategory
);
CategoriesRouter.patch(
  "/v1/categories/:id",
  CategoriesController.updateCategory
);
module.exports = CategoriesRouter;
