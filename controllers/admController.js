import { queryAllCategories, queryAllProducts, queryAllProductsWithCategories } from "../db/queries.js";

async function getAllProductsAdm(req, res) {
    const [categories, products] = await Promise.all([queryAllCategories(), queryAllProductsWithCategories()]);
    res.render("all_items_adm", { categories: categories, products: products });
}

export {
    getAllProductsAdm,
}
