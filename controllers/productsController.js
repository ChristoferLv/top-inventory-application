import { body, matchedData, validationResult } from "express-validator";
import { deleteProductById, insertNewProduct, queryAllCategories, queryAllProducts, queryAllProductsFromCategoryId, queryAllProductsWithCategories, updateProductById } from "../db/queries.js";

const validateNewProduct = [
    body("name").trim().isLength({ max: 50 }).withMessage("Maximum size for product name is 50"),
    body("price").trim().isNumeric().withMessage("Price must be a number").isFloat({ min: 0 }).withMessage("Price must be greater than 0"),
    body("amount").trim().isNumeric().withMessage("Amount must be a number").isInt({ min: 0 }).withMessage("Amount must be greater than 0"),
    body("category").trim().isInt().withMessage("Category id must be an int")
];

async function buildMainPage(req, res) {
    const [categories, products] = await Promise.all([queryAllCategories(), queryAllProducts()]);
    res.render("index", { categories: categories, products: products });
}

// async function getAllProducts(req, res) {
//     const [categories, products] = await Promise.all([queryAllCategories(), queryAllProducts(req.params.id)]);
//     res.render("all_items_adm", { categories: categories, products: products });
// }

async function getProductsFromCategory(req, res) {
    const [categories, products] = await Promise.all([queryAllCategories(), queryAllProductsFromCategoryId(req.params.id)]);
    res.render("products_list", { categories: categories, products: products });
}

async function addNewProductGet(req, res) {
    const categories = await queryAllCategories();
    res.render("add_item", { categories: categories });
}

// async function addNewProductPost(req, res) {
//     await insertNewProduct(req.body.name, req.body.price, req.body.amount, req.body.category);
//     res.redirect("/adm/products");
// }

const addNewProductPost = [validateNewProduct,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             const [categories, products] = await Promise.all([queryAllCategories(), queryAllProductsWithCategories()]);
            return res.status(400).render("all_items_adm", {
                recoveredInsertValues: JSON.stringify({ id: req.params.id, name: req.body.name, price: req.body.price, amount: req.body.amount, category: req.body.category }),
                categories: categories,
                products: products,
                errors: errors.array(),
            });
        }

        const { name, price, amount, category } = matchedData(req);
        await insertNewProduct(req.params.id, name, price, amount, category);
        res.redirect("/adm/products");
    }
];

const updateProductByIdPost = [validateNewProduct,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const [categories, products] = await Promise.all([queryAllCategories(), queryAllProductsWithCategories()]);
            return res.status(400).render("all_items_adm", {
                recoveredValues: JSON.stringify({ id: req.params.id, name: req.body.name, price: req.body.price, amount: req.body.amount, category: req.body.category }),
                categories: categories,
                products: products,
                errors: errors.array(),
            });
        }

        const { name, price, amount, category } = matchedData(req);
        await updateProductById(req.params.id, name, price, amount, category);
        res.redirect("/adm/products");
    }
];

// async function updateProductByIdPost(req, res) {
//     await updateProductById(req.params.id, req.body.name, req.body.price, req.body.amount, req.body.category);
//     res.redirect("/adm/products");
// }

async function removeProductById(req, res) {
    await deleteProductById(req.params.id)
    res.redirect("/adm/products");
}


export {
    // getAllProducts,
    buildMainPage,
    getProductsFromCategory,
    addNewProductGet,
    addNewProductPost,
    removeProductById,
    updateProductByIdPost
}
