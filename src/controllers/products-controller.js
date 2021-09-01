const path = require("path");

const productsController = {
  productDetail: (req, res) => {
    res.render("products/productDetail");
  },
  cart: (req, res) => {
    res.render("products/productCart");
  },
  fullpage: (req, res) => {
    res.render("products/fullpage");
  },
};

module.exports = productsController;
