// routes/usersRouter.js
import { Router } from "express";
import { getAllCategories, getProductsFromCategory } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", getProductsFromCategory);

export default categoriesRouter;
