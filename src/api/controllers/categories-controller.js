const db = require('../../database/models');

module.exports = {
  list: async (req, res) => {
    const categories = await db.Category.findAll();

    const abbrCategories = categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        description: category.description,
        link: `http://localhost:3001/api/categories/${category.id}`,
      };
    });

    res.json({
      meta: {
        count: categories.length,
        status: 200,
        url: '/api/categories',
      },
      data: abbrCategories,
    });
  },

  detail: async (req, res) => {
    const category = await db.Category.findByPk(req.params.id);

    if (category) {
      // Get corresponding products for each category
      const productsByCategory = await db.Product.findAll({
        include: [{ association: 'categories' }],
        where: {
          category_id: category.id,
        },
      });
      // Build the unique link for each product
      const productsLinks = productsByCategory.map((product) => {
        return `http://localhost:3001/api/products/${product.id}`;
      });

      const abbrCategory = {
        id: category.id,
        name: category.name,
        description: category.description,
        productsCount: productsByCategory.length,
        products: productsLinks,
      };

      res.json({
        meta: {
          status: 200,
          url: `/api/categories/${req.params.id}`,
        },
        data: abbrCategory,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: `/api/categories/${req.params.id}`,
        },
        data: `No se encontró la categoría con id ${req.params.id}`,
      });
    }
  },

  subList: async (req, res) => {
    const subcategories = await db.Subcategory.findAll();

    const abbrSubcategories = subcategories.map((subcategory) => {
      return {
        id: subcategory.id,
        name: subcategory.name,
        description: subcategory.description,
        link: `http://localhost:3001/api/subcategories/${subcategory.id}`,
      };
    });

    res.json({
      meta: {
        count: subcategories.length,
        status: 200,
        url: '/api/subcategories',
      },
      data: abbrSubcategories,
    });
  },

  subDetail: async (req, res) => {
    const subcategory = await db.Subcategory.findByPk(req.params.id);

    if (subcategory) {
      // Get corresponding products for each category
      const productsBySubcategory = await db.Product.findAll({
        include: [{ association: 'subcategories' }],
        where: {
          subcategory_id: subcategory.id,
        },
      });
      // Build the unique link for each product
      const productsLinks = productsBySubcategory.map((product) => {
        return `http://localhost:3001/api/products/${product.id}`;
      });

      const abbrSubcategory = {
        id: subcategory.id,
        name: subcategory.name,
        description: subcategory.description,
        productsCount: productsBySubcategory.length,
        products: productsLinks,
      };

      res.json({
        meta: {
          status: 200,
          url: `/api/subcategories/${req.params.id}`,
        },
        data: abbrSubcategory,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: `/api/subcategories/${req.params.id}`,
        },
        data: `No se encontró la sub-categoría con id ${req.params.id}`,
      });
    }
  },
};
