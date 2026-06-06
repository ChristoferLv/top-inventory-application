// routes/usersRouter.js
import { Router } from "express";
import { getAllProducts } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);

export default productsRouter;
