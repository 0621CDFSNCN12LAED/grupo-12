const db = require('../../database/models');

module.exports = {
  list: async (req, res) => {
    const products = await db.Product.findAll();

    const allCategories = await db.Category.findAll();

    console.log(allCategories);

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

    async function category(id) {
      const category = await db.Category.findOne({
        include: [{ association: 'products' }],
        where: {
          id: id,
        },
      });
      return category.name;
    }

    const abbrProducts = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        category: category(product.category_id),
        link: `http://localhost:3000/api/products/${product.id}`,
      };
    });

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
    const productCategory = await db.Category.findByPk(product.category_id)
    const productSubCategory = await db.Subcategory.findByPk(product.subcategory_id)

    const productInfo = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      discount: product.discount,
      stock: product.stock,
      starred: product.starred,
      deleted: product.deleted,
      category_name: productCategory.name,
      subcategory_name: productSubCategory.name
    }


    if (product) {
      product.image = `http://localhost:3000/img/${product.image}`;
      res.json({
        meta: {
          status: 200,
          url: `/api/products/${req.params.id}`,
        },
        data: productInfo,
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
