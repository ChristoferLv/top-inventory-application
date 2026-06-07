import { default as pool } from "./pools.js";

async function queryAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories ORDER BY id");
    return rows;
}

async function insertNewCategory(name) {
    try {
        const result = await pool.query("INSERT INTO categories (name) VALUES ($1)", [name]);

        if (result.rowCount > 0) {
            console.log('Insert successful!');
        } else {
            console.log('Query finished, but no rows were inserted.');
        }
    } catch (error) {
        console.error('Insert failed due to database error:', error.message);
    }
}

async function updateCategoryById(id, newName) {
    try {
        const result = await pool.query("UPDATE categories SET name=$1 WHERE id=$2" , [newName, id]);

        if (result.rowCount > 0) {
            console.log('Insert successful!');
        } else {
            console.log('Query finished, but no rows were inserted.');
        }
    } catch (error) {
        console.error('Insert failed due to database error:', error.message);
    }
}

async function deleteCategoryById(id) {
    try {
        const result = await pool.query("DELETE FROM categories WHERE id=$1", [id]);

        if (result.rowCount > 0) {
            console.log('Delete successful!');
        } else {
            console.log('Query finished, but no rows were deleted.');
        }
    } catch (error) {
        console.error('Delete failed due to database error:', error.message);
    }
}

async function queryAllProducts() {
    const { rows } = await pool.query("SELECT * FROM products ORDER BY id");
    return rows;
}

async function queryAllProductsWithCategories() {
    const { rows } = await pool.query("SELECT products.*, categories.name as categoryName FROM products JOIN categories ON products.category_ID = categories.id ORDER BY products.id");
    return rows;
}

async function queryAllProductsFromCategoryId(id) {
    const { rows } = await pool.query("SELECT products.* FROM products JOIN categories ON categories.id = category_ID WHERE categories.id=$1", [id]);
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

async function deleteProductById(id) {
    try {
        const result = await pool.query("DELETE FROM products WHERE id=$1", [id]);

        if (result.rowCount > 0) {
            console.log('Delete successful!');
        } else {
            console.log('Query finished, but no rows were deleted.');
        }
    } catch (error) {
        console.error('Delete failed due to database error:', error.message);
    }
}


export {
    queryAllCategories,
    updateCategoryById,
    deleteCategoryById,
    queryAllProducts,
    queryAllProductsFromCategoryId,
    insertNewProduct,
    deleteProductById,
    queryAllProductsWithCategories,
    insertNewCategory
}