
-- delete bamazon_db if exists
DROP DATABASE bamazon_db;
-- create bamazon_db
CREATE DATABASE bamazon_db;
-- use bamazon_db
USE bamazon_db;
-- create table called products
CREATE TABLE products(
	-- item_id column (unique id for each product)
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	-- product_name column (name of product)
	product_name VARCHAR(100) NOT NULL,
	-- department_name
	department_name VARCHAR(100) NOT NULL,
	-- price (cost to customer)
	price DECIMAL(7,2) NOT NULL,
	-- stock_quantity (how much of the product is available in stores)
	stock_quantity INTEGER(10) NOT NULL,
	-- 
    primary key (item_id)

);

-- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
-- red shirt, sportswear, 14.99, 12
-- blue shirt, sportswear, 14.99, 14
-- black shirt, sportswear, 19.99, 35
-- red jacket, outerwear, 29.00, 8
-- blue jacket, outerwear, 34.99, 6
-- black jacket, outerwear, 39.99, 12
-- red pants, pants, 19.99, 20
-- blue pants, pants, 24.99, 32
-- black pants, pants, 29.99, 47
-- tennis shoes, shoes, 59.99, 8
-- dress shoes, shoes, 69.99, 5

INSERT INTO products
    (product_name,department_name,price,stock_quantity)
VALUES
    ('red shirt' , 'sportswear', 14.99, 12),
    ('blue shirt' , 'sportswear', 14.99, 14),
    ('black shirt' , 'sportswear', 19.99, 35),
    ('red jacket' , 'outerwear', 29.00,8),
    ('blue jacket' , 'outerwear', 34.99, 6),
    ('black jacket' , 'outerwear', 39.99, 12),
    ('red pants' , 'pants', 19.99, 20),
    ('blue pants' , 'pants', 24.99, 32),
    ('black pants' , 'pants', 29.99, 47),
    ('tennis shoes' , 'shoes', 59.99, 8),
    ('dress shoes' , 'shoes', 69.99, 5);
