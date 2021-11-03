// Requires
const db = require("../database/models");

const productServices = require("../services/product-services");

const mainController = {
  home: async (req, res) => {
    const filteredProducts = await db.Product.findAll({
      where: {
        deleted: false,
      },
    });
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
