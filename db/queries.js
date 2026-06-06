import { default as pool } from "./pools.js";

async function queryAllProducts() {
    const { rows } = await pool.query("SELECT * FROM products");
    return rows;
}


export {
queryAllProducts
}