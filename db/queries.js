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

async function insertNewProduct(name, price, amount, category) {
    try {
        const result = await pool.query("INSERT INTO products (name, price, amount, category_ID) VALUES ($1, $2, $3, $4)", [name, price, amount, category]);

        if (result.rowCount > 0) {
            console.log('Insert successful!');
        } else {
            console.log('Query finished, but no rows were inserted.');
        }
    } catch (error) {
        console.error('Insert failed due to database error:', error.message);
    }
}


export {
    queryAllProducts,
    queryAllCategories,
    queryAllProductsFromCategoryId,
    insertNewProduct
}