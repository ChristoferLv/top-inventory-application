import { join } from 'node:path';
import express from "express";
import productsRouter from './routes/productsRoutes.js';
import categoriesRouter from './routes/categoriesRoutes.js';
import admRouter from './routes/admRoutes.js';

const dir = import.meta.dirname;
const PORT = 3000;
const app = express();
const assetsPath = join(dir, "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.set("views", join(dir, "views"));
app.set("view engine", "ejs");

app.use("/", productsRouter)
app.use("/products", productsRouter)
app.use("/adm", admRouter)
app.use("/categories", categoriesRouter)

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}! \nhttp://localhost:3000`);
});
