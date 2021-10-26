
CREATE DATABASE `decamping_db`;
USE decamping_db;

CREATE TABLE users (
  id int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  email VARCHAR(500) NOT NULL,
  password TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  image TEXT
) default charset utf8;

CREATE TABLE user_address (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id int(10) unsigned NOT NULL,
  street_name VARCHAR(200) NOT NULL,
  street_number VARCHAR(100) NOT NULL,
  city VARCHAR(200) NOT NULL,
  state VARCHAR(200) NOT NULL,
  reference VARCHAR(200),
  address_phone VARCHAR(100),
FOREIGN KEY (user_id) REFERENCES users(id)
) default charset utf8;

CREATE TABLE categories (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(200) NOT NULL
) default charset utf8;

CREATE TABLE subcategories (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(200) NOT NULL
) default charset utf8;

CREATE TABLE products (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  image TEXT NOT NULL,
  price DECIMAL NOT NULL,
  description TEXT NOT NULL,
  discount DECIMAL,
  stock DECIMAL NOT NULL,
  category_id INTEGER NOT NULL,
  subcategory_id INTEGER NOT NULL,
  starred BOOLEAN NOT NULL,
  deleted BOOLEAN,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (subcategory_id) REFERENCES subcategories(id)
) default charset utf8;

CREATE TABLE cart (
  cart_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id int(10) unsigned NOT NULL,
  purchase_date DATETIME NOT NULL,
  external_reference VARCHAR(200) NOT NULL,
  address_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (address_id) REFERENCES user_address(id)
) default charset utf8;

CREATE TABLE product_cart (
  product_cart_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  cart_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (cart_id) REFERENCES cart(cart_id)
) default charset utf8;



