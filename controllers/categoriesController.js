import { deleteCategoryById, insertNewCategory, queryAllCategories, updateCategoryById } from "../db/queries.js";
import { body, matchedData, validationResult } from "express-validator";

const validateNewCategory = [
    body("name").trim().isAlpha().withMessage("Category name must have only letters").isLength({ max: 30 }).withMessage("Maximum size for category name is 30")
];

const validateAdmActions = [
    body("passKey").trim().equals("adm123").withMessage("Adm password is incorrect.")
];

async function getAllCategories(req, res) {
    res.render("index", { categories: await queryAllCategories() });
}

const removeCategoryById = [validateAdmActions,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("all_categories_adm", {
                categories: await queryAllCategories(),
                errors: errors.array(),
                admError: true
            });
        }
        try {
            await deleteCategoryById(req.params.id)
        } catch (error) {
            if (error.code === '23503') {
                return res.status(400).render("all_categories_adm", {
                    categories: await queryAllCategories(),
                    errors: errors.array(),
                    dbError: true
                });
            }else{
                console.log(error)
            }
        }
        res.redirect("/adm/categories");
    }
]

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

const updateCategoryByIdPost = [validateNewCategory, validateAdmActions,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("all_categories_adm", {
                recoveredValues: JSON.stringify({ id: req.params.id, value: req.body.name }),
                categories: await queryAllCategories(),
                admPass: req.body.passKey,
                errors: errors.array(),
            });
        }

        const { name } = matchedData(req);
        await updateCategoryById(req.params.id, name);
        res.redirect("/adm/categories");
    }
];

export {
    getAllCategories,
    removeCategoryById,
    addNewCategoryPost,
    updateCategoryByIdPost
}
