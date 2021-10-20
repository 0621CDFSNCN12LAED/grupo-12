const path = require("path");
const fs = require("fs");

const productServices = require("../services/product-services");

const productsController = {
  viewAll: (req, res) => {
    const filteredProducts = productServices.findAll();

    res.render("products/products", { products: filteredProducts });
  },

  viewCategory: (req, res) => {
    // Find one category
    const productsByCategory = productServices.findCategory(req.params.category);
    const selectedCategory = req.params.category;
    res.render("products/productsCategory", { productsByCategory, selectedCategory });
  },

  detail: (req, res) => {
    const product = productServices.findOneById(req.params.id);
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
