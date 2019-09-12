DROP DATABASE IF EXISTS bamazon;
DROP TABLE IF EXISTS products;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(45),
  department_name VARCHAR(45),
  price DECIMAL(19,2),
  stock_quantity INT
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Shoe', 'Clothing', 5.99, 40000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Basket', 'Furniture', 399.99, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Gummy Bear', 'Food', 2.99, 300000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Mirror', 'Furniture', 12.99, 800);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Tie', 'Clothing', 99.99, 360);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Smart-Tablet', 'Electronics', 2999.99, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Very Large TV', 'Electronics', 49999.99, 34);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Gumbo', 'Food', 89.99, 7000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Sheets', 'Misc', 43.99, 340);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Only One Sock', 'Clothing', 3.99, 600000);