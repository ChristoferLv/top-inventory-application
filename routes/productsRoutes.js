// routes/usersRouter.js
import { Router } from "express";
import { buildMainPage, getAllProducts } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", buildMainPage);

export default productsRouter;
