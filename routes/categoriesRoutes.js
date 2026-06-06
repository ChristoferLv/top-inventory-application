// routes/usersRouter.js
import { Router } from "express";
import { getAllCategories, removeCategoryById } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.post("/remove/:id", removeCategoryById);


export default categoriesRouter;
