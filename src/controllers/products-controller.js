const path = require("path");
const fs = require("fs");

const adminServices = require("../services/admin-services");

const products = adminServices.products;

const productsController = {
  viewAll: (req, res) => {
    const filteredProducts = adminServices.findAll();

    res.render("products/products", { products: filteredProducts});
  },

  viewCategory: (req, res) => {
    // Find one category
    const productsByCategory = adminServices.findCategory(req.params.category);
    const selectedCategory = req.params.category;
    res.render("products/productsCategory", { productsByCategory, selectedCategory });
  },

  detail: (req, res) => {
    const product = adminServices.findOneById(req.params.id);
    res.render("products/productDetail", { product });
  },

  cart: (req, res) => {
    res.render("products/productCart");
  },
  fullpage: (req, res) => {
    res.render("products/fullpage");
  },
};

module.exports = productsController;
