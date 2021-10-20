// Requires
const path = require("path");
const fs = require("fs");

const productServices = require("../services/product-services");

const mainController = {
  home: (req, res) => {
    const filteredProducts = productServices.findAll();

    res.render("home", { products: filteredProducts });
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
};

module.exports = mainController;
