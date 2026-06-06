// routes/usersRouter.js
import { Router } from "express";
import { getAllCategories } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);

export default categoriesRouter;
