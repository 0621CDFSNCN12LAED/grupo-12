// ***** Global requires *****
const db = require("../database/models");

const productServices = require("../services/product-services-DB");

const { validationResult } = require('express-validator');

// ***** Controllers *****
const adminController = {
  // ----- Go to CREATE form -----
  create: (req, res) => {
    res.render("admin/product-create-form");
  },

  // ----- CREATE ONE product -----
  store: async (req, res) => {
    // Create one & save
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      await productServices.createOne(req.body, req.file);
      res.redirect("/products");
    } else {
      res.render('./admin/product-create-form', { errors: errors.mapped(), oldValues: req.body });
    }

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
    await productServices.editOne(req.params.id, req.body, req.file);
    res.redirect("/products");
  },

  // ----- DELETE ONE product -----
  destroy: async (req, res) => {
    await productServices.destroyOne(req.params.id);
    res.redirect("/products");
  },
};

module.exports = adminController;
