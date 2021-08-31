const path = require("path");

productsController = {
  productDetail: (req, res) => {
    res.render("productDetail");
  },
  cart: (req, res) => {
    res.render("productCart");
  },
  fullpage: (req, res) => {
    res.render("fullpage");
  },
};

module.exports = productsController;
