// ***** Services require *****
const productServices = require('../services/product-services-DB');

// ******* Validation results ********
const { validationResult } = require('express-validator');

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

  cart: async (req, res) => {
    let usuarioLogueado = req.session.usuarioLogueado;
    if (usuarioLogueado) {
      const productsInCart = await productServices.getCartByUser(usuarioLogueado.id);

      res.render('products/productCart', { products: productsInCart });
    } else {
      res.redirect('/users/login');
    }
  },

  addToCart: async (req, res) => {
    let usuarioLogueado = req.session.usuarioLogueado;
    if (usuarioLogueado) {
      const productToAdd = await productServices.addToCart(req.body, req.params.id, req.session);
      res.redirect('/products/cart/productCart');
    } else {
      res.redirect('/users/login');
    }
  },

  payment: async (req, res) => {
    let usuarioLogueado = req.session.usuarioLogueado;
    if (usuarioLogueado) {
      const productsInCart = await productServices.getCartByUser(usuarioLogueado.id);

      const addresses = await productServices.getAddresses(usuarioLogueado.id);
      res.render('./products/payment', { products: productsInCart, addresses });
    } else {
      res.redirect('/users/login');
    }
  },

  checkout: async (req, res) => {
    const errors = validationResult(req);
    let usuarioLogueado = req.session.usuarioLogueado;

    if (!usuarioLogueado) {
      res.redirect('/users/login');
    } else if (usuarioLogueado && errors.isEmpty()) {
      // Get products from cart to calculate total amount in productServices.checkout()
      const productsInCart = await productServices.getCartByUser(usuarioLogueado.id);

      // Create PO in 'orders' table, copy products information to 'order_product' table & update stock in 'products' table in DB
      const orderSuccess = await productServices.checkout(
        req.body,
        usuarioLogueado.id,
        productsInCart
      );

      // Restore cart to zero and update stock in 'products' table in DB
      if (orderSuccess) {
        await productServices.restoreCart(usuarioLogueado.id);
        const msg = 'Compra exitosa!';
        res.render('products/checkout', { orderSuccess, msg });
      } else {
        const msg = 'Hubo un error en el procesamiento de la orden, por favor int??ntelo nuevamente';
        res.render('products/checkout', { msg });
      }
    } else {
      const productsInCart = await productServices.getCartByUser(usuarioLogueado.id);
      const addresses = await productServices.getAddresses(usuarioLogueado.id);

      res.render('products/payment', {
        errors: errors.mapped(),
        products: productsInCart,
        addresses,
      });
    }
  },

  download: async (req, res) => {
    productServices.createPDF(req.params.id, res);
  },

  fullpage: (req, res) => {
    res.render('products/fullpage');
  },
};

module.exports = productsController;
