// routes/usersRouter.js
import { Router } from "express";
import { getAllCategoriesAdm, getAllProductsAdm } from "../controllers/admController.js";

const admRouter = Router();

admRouter.get("/products", getAllProductsAdm);
admRouter.get("/categories", getAllCategoriesAdm);


export default admRouter;
