# Inventory Application

An inventory management app built as part of [The Odin Project Node.js](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) course. It lets you organize products and categories with an Express, EJS, and PostgreSQL stack.

## Objective

The goal of this project was to practice:
- Building CRUD flows with Express
- Rendering server-side pages with EJS
- Managing relational data with PostgreSQL
- Organizing controllers and routes by resource
- Creating an admin-style interface for inventory management

## What is it?

A small inventory application where you can:
- Browse products
- Browse categories
- Add, update, and remove products
- Add, update, and remove categories
- View admin-style pages for products and categories

## How to Use

1. Open the project folder.
2. Install dependencies:

```bash
npm install
```

3. Configure your environment variables using `.env.example` as a reference.
4. Seed the database if needed:

```bash
npm run seed
```

5. Start the development server:

```bash
npm run dev
```

6. Open the browser at `http://localhost:3000`.

## Features

- **Product management**: add, update, and delete products
- **Category management**: organize products by category
- **Resource-based routes**: separate controllers and routers for each domain
- **Admin views**: dedicated pages for inventory oversight
- **Database-backed data**: all product and category records live in PostgreSQL

## Project Structure

- `index.js`: Express app bootstrap
- `routes/`: product, category, and admin routes
- `controllers/`: request handlers for each resource
- `db/`: database queries and seed helpers
- `views/`: EJS templates
- `public/`: static assets

## Technologies Used

- Node.js
- Express
- EJS
- PostgreSQL
- express-validator

## Visualization

<img width="1910" height="915" alt="inventory_aplication_screenshot" src="https://github.com/user-attachments/assets/364d349f-1c8e-4bef-b37b-86d7c6a4e7d7" />

---

Project developed following: [The Odin Project - Inventory Application](https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
