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
    // Crear la OC en DB: user_id, purchase_date, external_reference, address_id
    const newOrder = await productServices.checkout(req.body);
    // Pasar la info de los productos a tabla intermedia order_product

    // Eliminar los items del stock

    // Crear PDF de la OC para el cliente (chequear COMO)
    // Re-dirigir a una pagina que indique que la compra fue exitosa y permita descargar el PDF
    res.send('estas ok');
  },

  fullpage: (req, res) => {
    res.render('products/fullpage');
  },
};

module.exports = productsController;
