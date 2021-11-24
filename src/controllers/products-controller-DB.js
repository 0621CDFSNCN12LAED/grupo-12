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
    let usuarioLogueado = req.session.usuarioLogueado
    if (usuarioLogueado) {
      console.log("usuarioLogueado: " + usuarioLogueado.id)
      const productsInCart = await productServices.getCartByUser(usuarioLogueado.id);

      var countList = productsInCart.reduce(function(acum, num){
        acum[num.product_id] = (acum[num.product_id] || 0) + 1;
        return acum;
      }, {});
      
      console.log(countList)

      res.render('products/productCart', {products: productsInCart});
        //console.log("id: " + product.id)
        //console.log("quantity: " + product.quantity)
        //console.log("product_id: " + product.product_id)
        //console.log("products: " + product.products)
    } else {
      res.redirect('/users/login');
    }

  },

  addToCart: async (req, res) => {
    let usuarioLogueado = req.session.usuarioLogueado
    if (usuarioLogueado) {
      const productToAdd = await productServices.addToCart(req.body, req.params.id, req.session);
      res.redirect("/products/cart/productCart");
    
    } else {
      res.redirect('/users/login');
    }

  },


  fullpage: (req, res) => {
    res.render('products/fullpage');
  },
};

module.exports = productsController;
