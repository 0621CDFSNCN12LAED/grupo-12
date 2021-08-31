const path = require("path");

productsController = {
  productDetail: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/productDetail.html"));
  },
  cart: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/productCart.html"));
  },
  fullpage: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/fullpage.html"));
  },
};

module.exports = productsController;
