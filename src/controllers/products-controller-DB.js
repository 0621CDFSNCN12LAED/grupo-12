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
    let usuarioLogueado = req.session.usuarioLogueado;
    if (usuarioLogueado) {
      // Crear la OC en DB: user_id, purchase_date, external_reference, address_id
      // Pasar la info de los productos a tabla intermedia order_product
      const orderSuccess = await productServices.checkout(req.body, usuarioLogueado.id);

      // Eliminar los items del stock
      if (orderSuccess) {
        await productServices.restoreCart(usuarioLogueado.id);
        const msg = 'Compra exitosa!';
        res.render('products/checkout', { orderSuccess, msg });
      } else {
        const msg = 'Hubo un error en el procesamiento de la orden, por favor inténtelo nuevamente';
        res.render('products/checkout', { msg });
      }
    } else {
      res.redirect('/users/login');
    }
  },

  fullpage: (req, res) => {
    res.render('products/fullpage');
  },
};

module.exports = productsController;
