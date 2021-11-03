// ***** Global requires *****
const db = require("../database/models");

const productServices = require("../services/product-services-DB");

// ***** Controllers *****
const adminController = {
  // ----- Go to CREATE form -----
  create: (req, res) => {
    res.render("admin/product-create-form");
  },

  // ----- CREATE ONE product -----
  store: async (req, res) => {
    // Create one & save
    productServices.createOne(req.body, req.file);
    res.redirect("/products");
  },

  // ----- Go to EDIT form -----
  edit: async (req, res) => {
    // Find one
    const product = await productServices.findOneById(req.params.id);
    res.render("admin/product-edit-form", { product });
  },

  // ----- EDIT ONE product -----
  update: async (req, res) => {
    // Find one, edit & save
    productServices.editOne(req.params.id, req.body, req.file);
    res.redirect("/products");
  },

  // ----- DELETE ONE product -----
  destroy: async (req, res) => {
    productServices.destroyOne(req.params.id);
    res.redirect("/products");
  },
};

module.exports = adminController;
