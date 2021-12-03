const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
  list: async (req, res) => {
    const products = await db.Product.findAll();

    async function category(product) {
      await db.Category.findOne({ where: { id: product.category_id } });
    }

    const abbrProducts = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        category: category(product),
        link: `http://localhost:3000/api/products/${product.id}`,
      };
    });

    return res.json({
      meta: {
        count: products.length,
        countByCategory: 'PENDING',
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
        data: `No se encontró el usuario con id ${req.params.id}`,
      });
    }
  },
};
