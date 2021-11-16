// ***** Services require *****
const productServices = require('../services/product-services-DB');

// ***** Controllers *****
const productsController = {
  viewAll: async (req, res) => {
    const filteredProducts = await productServices.findAll();

    res.render('products/products', { products: filteredProducts });
  },

  viewCategory: async (req, res) => {
    const selectedCategory = await productServices.findCategory(req.params);
    const productsByCategory = await productServices.productsByCategory(selectedCategory);

    res.render('products/productsCategory', { selectedCategory, productsByCategory });
  },

  detail: async (req, res) => {
    const product = await productServices.findOneById(req.params.id);

    res.render('products/productDetail', { product });
  },

  cart: (req, res) => {
    res.render('products/productCart');
  },

  addToCart: async (req, res) => {
    const productToAdd = await productServices.addToCart(req.body, req.params.id, req.session);

    res.send(productToAdd);
  },

  fullpage: (req, res) => {
    res.render('products/fullpage');
  },
};

module.exports = productsController;
