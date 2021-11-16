// ***** Global requires *****
const db = require('../database/models');

const productServices = {
  async findAll() {
    const filteredProducts = await db.Product.findAll({
      where: {
        deleted: false,
      },
    });
    return filteredProducts;
  },

  async findCategory(payload) {
    const selectedCategory = await db.Category.findOne({
      where: {
        name: payload.category,
      },
    });
    return selectedCategory;
  },

  async findSubcategory(payload) {
    const selectedSubcategory = await db.Subcategory.findOne({
      where: {
        name: payload.subcategory,
      },
    });
    return selectedSubcategory;
  },

  async productsByCategory(payload) {
    const productsByCategory = await db.Product.findAll({
      include: [{ association: 'categories' }],
      where: {
        category_id: payload.id,
        deleted: false,
      },
    });
    return productsByCategory;
  },

  async findOneById(id) {
    const product = await db.Product.findByPk(id);
    return product;
  },

  async createOne(payload, file) {
    const category = await this.findCategory(payload);

    const subcategory = await this.findSubcategory(payload);

    const product = await db.Product.create({
      name: payload.name,
      image: file ? file.filename : 'default-img.jpg',
      price: Number(payload.price),
      description: payload.description,
      discount: Number(payload.discount),
      stock: Number(payload.stock),
      starred: payload.starred == 'on' ? (payload.starred = true) : (payload.starred = false),
      deleted: false,
      category_id: category.id,
      subcategory_id: subcategory.id,
    });

    return product;
  },

  async editOne(params, payload, file) {
    let newImage;
    if (file) {
      const image = file.filename;
      newImage = image;
    } else {
      const oldImage = await db.Product.findByPk(params);
      newImage = oldImage.image;
    }

    const category = await this.findCategory(payload);

    const subcategory = await this.findSubcategory(payload);

    await db.Product.update(
      {
        name: payload.name,
        image: newImage,
        price: Number(payload.price),
        description: payload.description,
        discount: Number(payload.discount),
        stock: Number(payload.stock),
        starred: payload.starred == 'on' ? (payload.starred = true) : (payload.starred = false),
        deleted: payload.deleted == 'on' ? (payload.deleted = true) : (payload.deleted = false),
        category_id: category.id,
        subcategory_id: subcategory.id,
      },
      {
        where: {
          id: params,
        },
      }
    );
  },

  async addToCart(payload, params, session) {
    await db.UserProduct.create(
      {
        quantity: payload.quantity,
      },
      {
        where: {
          product_id: params,
          user_id: session.usuarioLogueado.id,
        },
      }
    );
  },

  async destroyOne(params) {
    await db.Product.update(
      {
        deleted: true,
      },
      {
        where: {
          id: params,
        },
      }
    );
  },
};

module.exports = productServices;
