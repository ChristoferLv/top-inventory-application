import { deleteProductById, insertNewProduct, queryAllCategories, queryAllProducts, queryAllProductsFromCategoryId } from "../db/queries.js";

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

async function addNewProductPost(req, res) {
    console.log("here", req.body)
    await insertNewProduct(req.body.name, req.body.price, req.body.amount, req.body.category);
    res.redirect("/products/add-product");
}

async function removeProductById(req, res) {
    console.log(req.body)
    await deleteProductById(req.params.id)
    res.redirect("/adm/products");
}


export {
    // getAllProducts,
    buildMainPage,
    getProductsFromCategory,
    addNewProductGet,
    addNewProductPost,
    removeProductById
}
