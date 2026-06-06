import { deleteCategoryById, queryAllCategories } from "../db/queries.js";

async function getAllCategories(req, res) {
    res.render("index", { categories: await queryAllCategories() });
}

async function removeCategoryById(req, res) {
    await deleteCategoryById(req.params.id)
    res.redirect("/adm/categories");
}

export {
    getAllCategories,
    removeCategoryById
}
