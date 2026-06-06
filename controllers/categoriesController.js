import { queryAllCategories } from "../db/queries.js";

async function getAllCategories(req, res) {
    res.render("index", { categories: await queryAllCategories() });
}

export {
    getAllCategories,
}
