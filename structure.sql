
DROP DATABASE IF EXISTS decamping_db;

CREATE DATABASE `decamping_db`;
USE decamping_db;

CREATE OR REPLACE TABLE users (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image TEXT DEFAULT 'no-image.jpg',
  PRIMARY KEY (id)
) default charset utf8;

CREATE OR REPLACE TABLE addresses (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT(10) UNSIGNED NOT NULL,
  street_name VARCHAR(200) NOT NULL,
  street_number VARCHAR(100) NOT NULL,
  city VARCHAR(200) NOT NULL,
  province VARCHAR(200) NOT NULL,
  country VARCHAR(100) NOT NULL,
  reference VARCHAR(200),
  phone_number INT,
  PRIMARY KEY (id),
  KEY fk_user_id (user_id),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
) default charset utf8;

CREATE OR REPLACE TABLE categories (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
) default charset utf8;

CREATE OR REPLACE TABLE subcategories (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
) default charset utf8;

CREATE OR REPLACE TABLE products (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  image TEXT DEFAULT 'default-img.jpg',
  price DECIMAL NOT NULL,
  description TEXT NOT NULL,
  discount SMALLINT NOT NULL,
  stock SMALLINT NOT NULL,
  starred BOOLEAN NOT NULL,
  deleted BOOLEAN NOT NULL,
  category_id INT(10) UNSIGNED NOT NULL,
  subcategory_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY fk_category_id (category_id),
  KEY fk_subcategory_id (subcategory_id),
  CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories(id),
  CONSTRAINT fk_subcategory_id FOREIGN KEY (subcategory_id) REFERENCES subcategories(id)
) default charset utf8;

CREATE OR REPLACE TABLE orders (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT(10) UNSIGNED NOT NULL,
  purchase_date DATETIME NOT NULL,
  external_reference VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
  KEY fkey_user_id (user_id),
  CONSTRAINT fkey_user_id FOREIGN KEY (user_id) REFERENCES users(id)
) default charset utf8;

CREATE OR REPLACE TABLE order_product (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id INT(10) UNSIGNED NOT NULL,
  product_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY fk_order_id (order_id),
  KEY fk_product_id (product_id),
  CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES orders(id),
  CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(id)
) default charset utf8;



