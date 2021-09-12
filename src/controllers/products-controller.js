const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
  productDetail: (req, res) => {
    const product = products.find((prod) => {
			return prod.id == req.params.id
		})
    res.render("products/productDetail",{product});
  },
  cart: (req, res) => {
    res.render("products/productCart");
  },
  fullpage: (req, res) => {
    res.render("products/fullpage");
  },
  allProducts: (req,res) => {
    res.render("products/products", {products});
  },
  productCategory: (req,res) => {
    let selectedCategory = req.params.category
    let productsByCategory = products.filter((prod) => {
			return prod.category == selectedCategory
		})
    res.render("products/productsCategory", {productsByCategory, selectedCategory});

  }
};

module.exports = productsController;
