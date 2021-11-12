
DROP DATABASE IF EXISTS decamping_db;

CREATE DATABASE `decamping_db`;
USE decamping_db;

CREATE TABLE users (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) default charset utf8;

CREATE TABLE addresses (
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

CREATE TABLE categories (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
) default charset utf8;

CREATE TABLE subcategories (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
) default charset utf8;

CREATE TABLE products (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  image TEXT,
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

CREATE TABLE orders (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT(10) UNSIGNED NOT NULL,
  purchase_date DATETIME NOT NULL,
  external_reference VARCHAR(200) NOT NULL,
  address_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY fkey_user_id (user_id),
  KEY fkey_address_id (address_id),
  CONSTRAINT fkey_user_id FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fkey_address_id FOREIGN KEY (address_id) REFERENCES addresses(id)
) default charset utf8;

CREATE TABLE order_product (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id INT(10) UNSIGNED NOT NULL,
  product_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY fk_order_id (order_id),
  KEY fk_product_id (product_id),
  CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES orders(id),
  CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(id)
) default charset utf8;

CREATE TABLE carts (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY fkey_usercart_id (user_id),
  CONSTRAINT fkey_usercart_id FOREIGN KEY (user_id) REFERENCES users(id)
) default charset utf8;

CREATE TABLE cart_product (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  cart_id INT(10) UNSIGNED NOT NULL,
  product_id INT(10) UNSIGNED NOT NULL,
  quantity INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY fk_cart_id (cart_id),
  KEY fk_cartproduct_id (product_id),
  CONSTRAINT fk_cart_id FOREIGN KEY (cart_id) REFERENCES carts(id),
  CONSTRAINT fk_cartproduct_id FOREIGN KEY (product_id) REFERENCES products(id)
) default charset utf8;