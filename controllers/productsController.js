import { queryAllCategories, queryAllProducts } from "../db/queries.js";

async function buildMainPage(req, res) {
    const [ categories, products ] = await Promise.all([queryAllCategories(), queryAllProducts()]);
    res.render("index", { categories: categories, products: products });
}

async function getAllProducts(req, res) {
    res.render("index", { products: await queryAllProducts() });
}


export {
    getAllProducts,
    buildMainPage
}
