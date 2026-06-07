// routes/usersRouter.js
import { Router } from "express";
import { addNewCategoryPost, getAllCategories, removeCategoryById } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.post("/add-category", addNewCategoryPost);
categoriesRouter.post("/remove/:id", removeCategoryById);


export default categoriesRouter;
