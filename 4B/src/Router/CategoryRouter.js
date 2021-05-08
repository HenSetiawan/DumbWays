const express = require("express");
const CategoriesRouter = express.Router();
const CategoriesController = require("../Controller/CategoriesController");

CategoriesRouter.get("/v1/categories", CategoriesController.getAllCategories);
module.exports = CategoriesRouter;
