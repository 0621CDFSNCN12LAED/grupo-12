const db = require('../../database/models');

module.exports = {
  list: async (req, res) => {
    const products = await db.Product.findAll();

    const campingProducts = await db.Product.findAll({
      include: [{ association: 'categories' }],
      where: {
        category_id: 1,
      },
    });
    const montanismoProducts = await db.Product.findAll({
      include: [{ association: 'categories' }],
      where: {
        category_id: 2,
      },
    });
    const escaladaProducts = await db.Product.findAll({
      include: [{ association: 'categories' }],
      where: {
        category_id: 3,
      },
    });
    const skiProducts = await db.Product.findAll({
      include: [{ association: 'categories' }],
      where: {
        category_id: 4,
      },
    });

    // Map method returns a promise for each product
    const promises = products.map(async (product) => {
      // Get corresponding category for each product
      const category = await db.Category.findOne({
        include: [{ association: 'products' }],
        where: {
          id: product.category_id,
        },
      });
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        category: category.name,
        link: `http://localhost:3001/api/products/${product.id}`,
      };
    });

    // Await all promises to be resolved and store them in 'abbrProducts' const
    const abbrProducts = await Promise.all(promises);

    return res.json({
      meta: {
        count: products.length,
        countByCategory: {
          camping: campingProducts.length,
          montañismo: montanismoProducts.length,
          escalada: escaladaProducts.length,
          ski: skiProducts.length,
        },
        status: 200,
        url: '/api/products',
      },
      data: abbrProducts,
    });
  },

  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    const category = await db.Category.findByPk(product.category_id);
    const subcategory = await db.Subcategory.findByPk(product.subcategory_id);

    if (product) {
      const abbrProduct = {
        id: product.id,
        name: product.name,
        image: `http://localhost:3001/img/products/${product.image}`,
        price: Number(product.price),
        description: product.description,
        discount: Number(product.discount),
        stock: product.stock,
        starred: product.starred,
        category: category.name,
        subcategory: subcategory.name,
      };

      res.json({
        meta: {
          status: 200,
          url: `/api/products/${req.params.id}`,
        },
        data: abbrProduct,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: `/api/products/${req.params.id}`,
        },
        data: `No se encontró el producto con id ${req.params.id}`,
      });
    }
  },
};
