import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(30)
);

ALTER SEQUENCE categories_id_seq RESTART WITH 1;

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(50),
  price NUMERIC,
  amount INTEGER,
  category_ID INTEGER,
  FOREIGN KEY (category_ID) REFERENCES categories (id) 
);

INSERT INTO categories (name) VALUES 
 ('RAM'),
 ('Display'),
 ('CPU'),
 ('GPU'),
 ('Power Supply'),
 ('Mouse'),
 ('Keyboard'),
 ('Mousepad');

INSERT INTO products (name, price, amount, category_ID) VALUES 
 ('RAM 2x8 4800MHz', 100, 5, 1),
 ('RAM 2x8 5200MHz', 150, 3, 1),
 ('RAM 2x16 4800MHz', 200, 7, 1),
 ('RAM 1x16 4800MHz', 120, 5, 1),
 
 ('Display 16\'\' BN', 80, 3, 2),
 ('Display 14\'\' BN', 70, 5, 2),
 ('Display 21\'\' BN', 100, 3, 2),
 ('Display 22\'\' BN 160Hz', 100, 6, 2),
 
 ('CPU Intel 4.2GHz', 100, 10, 3),
 ('CPU Intel 4.1GHz 12 cores', 120, 8, 3),
 ('CPU AMD Ryzen 9 9950X', 200, 10, 3),
 ('CPU AMD Ryzen 9 9900X', 160, 6, 3),
 
 ('GPU NVIDIA 5090', 300, 2, 4),
 ('GPU NVIDIA 1080', 100, 3, 4),
 ('GPU AMD Radeon™ RX 9070 XT', 280, 8, 4),
 ('GPU AMD Radeon™ RX 9060 XT', 180, 12, 4),
 
 ('Power Supply Corsair 1500W', 300, 10, 5),
 ('Power Supply Cooler Master 2000W', 350, 6, 5),
 
 ('Mouse BN', 50, 20, 6),
 
 ('Keyboard BN', 40, 12, 7),

 ('Mousepad Speed', 12, 20, 8),
 ('Mousepad Precision', 12, 25, 8);
`;

async function main() {
  console.log("seeding...", `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
