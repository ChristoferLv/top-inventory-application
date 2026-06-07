import { deleteCategoryById, insertNewCategory, queryAllCategories } from "../db/queries.js";
import { body, matchedData, validationResult } from "express-validator";

const validateNewCategory = [
    body("name").trim().isAlpha().withMessage("Category name must have only letters").isLength({ max: 30 }).withMessage("Maximum size for category name is 30")
];

async function getAllCategories(req, res) {
    res.render("index", { categories: await queryAllCategories() });
}

async function removeCategoryById(req, res) {
    await deleteCategoryById(req.params.id)
    res.redirect("/adm/categories");
}

const addNewCategoryPost = [validateNewCategory,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("all_categories_adm", {
                nameValue: req.body.name,
                categories: await queryAllCategories(),
                errors: errors.array(),
            });
        }

        const { name } = matchedData(req);
        await insertNewCategory(name);
        res.redirect("/adm/categories");
    }
];

// async function addNewCategoryPost(req, res) {
//     await insertNewCategory(req.body.name);
//     res.redirect("/adm/categories");
// }

export {
    getAllCategories,
    removeCategoryById,
    addNewCategoryPost
}
