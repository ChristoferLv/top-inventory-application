import { queryAllProducts } from "../db/queries.js";

async function getAllProducts(req, res) {
    res.render("index", { products: await queryAllProducts() });
}

export{
    getAllProducts
}
