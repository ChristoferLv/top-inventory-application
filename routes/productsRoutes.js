// routes/usersRouter.js
import { Router } from "express";
import { addNewProductGet, addNewProductPost, buildMainPage, getProductsFromCategory, removeProductById } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", buildMainPage);
productsRouter.get("/add-product", addNewProductGet);
productsRouter.post("/add-product", addNewProductPost);
productsRouter.post("/product/remove/:id", removeProductById);
productsRouter.get("/:id", getProductsFromCategory);

export default productsRouter;
