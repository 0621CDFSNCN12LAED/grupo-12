// ***** Global requires *****
const path = require("path");
const fs = require("fs");

// ***** Database folder *****
const productsFilePath = path.join(__dirname, "../data/productsDB.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const adminServices = {
  products() {
    return products;
  },
  findAll() {
    const filteredProducts = products.filter((prod) => {
      return prod.deleted != true;
    });
    return filteredProducts;
  },
  findCategory(category) {
    const selectedCategory = category;
    const filteredProducts = this.findAll();
    const productsByCategory = filteredProducts.filter((prod) => {
      return prod.category == selectedCategory;
    });
    return productsByCategory;
  },

  findOneById(id) {
    const product = products.find((prod) => {
      return prod.id == id;
    });
    return product;
  },

  createOne(payload, image) {
    const lastProduct = products[products.length - 1];
    const biggestproductId = products.length > 0 ? lastProduct.id : 0;
    const product = {
      id: biggestproductId + 1,
      ...payload,
      price: Number(payload.price),
      discount: Number(payload.discount),
      starred: payload.starred == "on" ? (payload.starred = true) : (payload.starred = false),
      // Falta agregar atributos DELETED y STOCK
      img: image ? image.filename : "default-img.jpg",
    };
    products.push(product);
    this.save();
  },

  editOne(id, payload, image) {
    const product = this.findOneById(id);
    product.name = payload.name;
    product.description = payload.description;
    product.category = payload.category;
    product.subcategory = payload.subcategory;
    product.discount = Number(payload.discount);
    product.starred =
      payload.starred == "on" ? (payload.starred = true) : (payload.starred = false);
    product.price = Number(payload.price);
    product.img = image ? image.filename : product.img;
    this.save();
  },
  destroyOne(id) {
    const product = this.findOneById(id);
    product.deleted = true;
    this.save();
  },

  save() {
    const productsJSON = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, productsJSON);
  },
};

module.exports = adminServices;
