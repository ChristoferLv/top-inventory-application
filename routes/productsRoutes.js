// routes/usersRouter.js
import { Router } from "express";
import { addNewProductGet, addNewProductPost, buildMainPage, getAllProducts, getProductsFromCategory } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", buildMainPage);
productsRouter.get("/add-product", addNewProductGet);
productsRouter.post("/add-product", addNewProductPost);
productsRouter.get("/:id", getProductsFromCategory);

export default productsRouter;
