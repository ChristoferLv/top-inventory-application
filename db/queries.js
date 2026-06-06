import { default as pool } from "./pools.js";

async function queryAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

async function queryAllProducts() {
    const { rows } = await pool.query("SELECT * FROM products");
    return rows;
}

async function queryAllProductsFromCategoryId(id) {
    const { rows } = await pool.query("SELECT * FROM products JOIN categories ON categories.id = category_ID WHERE categories.id=$1", [id]);
    return rows;
}


export {
    queryAllProducts,
    queryAllCategories,
    queryAllProductsFromCategoryId
}