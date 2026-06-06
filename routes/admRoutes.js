// routes/usersRouter.js
import { Router } from "express";
import { getAllProductsAdm } from "../controllers/admController.js";

const admRouter = Router();

admRouter.get("/products", getAllProductsAdm);


export default admRouter;
