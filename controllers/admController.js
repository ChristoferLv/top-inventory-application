import { queryAllCategories, queryAllProductsWithCategories } from "../db/queries.js";

async function getAllProductsAdm(req, res) {
    const [categories, products] = await Promise.all([queryAllCategories(), queryAllProductsWithCategories()]);
    res.render("all_items_adm", { categories: categories, products: products });
}

async function getAllCategoriesAdm(req, res) {
    const categories = await queryAllCategories();
    res.render("all_categories_adm", { categories: categories });
}

export {
    getAllProductsAdm,
    getAllCategoriesAdm
}
