import { queryAllCategories, queryAllProductsFromCategoryId } from "../db/queries.js";

async function getAllCategories(req, res) {
    res.render("index", { categories: await queryAllCategories() });
}

async function getProductsFromCategory(req, res) {
    const [categories, products] = await Promise.all([queryAllCategories(), queryAllProductsFromCategoryId(req.params.id)]);
    res.render("products_list", { categories: categories, products: products });
}


export {
    getAllCategories,
    getProductsFromCategory
}
