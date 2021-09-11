const productController = require("../controllers/products-controller");
const products = productController.products;

const mainController = {
  home: (req, res) => {
    res.render("home", { products: products });
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
};

module.exports = mainController;
