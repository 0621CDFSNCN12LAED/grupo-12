// ***** Global requires *****
const path = require("path");
const fs = require("fs");

const productServices = require("../services/product-services");

// ***** Controllers *****
const adminController = {
  // ----- Go to CREATE form -----
  create: (req, res) => {
    res.render("admin/product-create-form");
  },

  // ----- CREATE ONE product -----
  store: (req, res) => {
    // Create one & save
    productServices.createOne(req.body, req.file);
    res.redirect("/products");
  },

  // ----- Go to EDIT form -----
  edit: (req, res) => {
    // Find one
    const product = productServices.findOneById(req.params.id);
    res.render("admin/product-edit-form", { product });
  },

  // ----- EDIT ONE product -----
  update: (req, res) => {
    // Find one, edit & save
    productServices.editOne(req.params.id, req.body, req.file);
    res.redirect("/products");
  },

  // ----- DELETE ONE product -----
  destroy: (req, res) => {
    productServices.destroyOne(req.params.id);
    res.redirect("/products");
  },
};

module.exports = adminController;
