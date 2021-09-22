// Requires
const path = require("path");
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../data/productsDB.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const adminServices = require("../services/admin-services");

const mainController = {
  home: (req, res) => {
    const filteredProducts = adminServices.findAll();

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
