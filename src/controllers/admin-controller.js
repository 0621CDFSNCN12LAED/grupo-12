// ***** Global requires *****
const path = require("path");
const fs = require("fs");

const adminServices = require("../services/admin-services");

// ***** Controllers *****
const adminController = {
  // ----- Go to CREATE form -----
  create: (req, res) => {
    res.render("admin/product-create-form");
  },

  // ----- CREATE ONE product -----
  store: (req, res) => {
    // Create one & save
    adminServices.createOne(req.body, req.file);
    res.redirect("/products");
  },

  // ----- Go to EDIT form -----
  edit: (req, res) => {
    // Find one
    const product = adminServices.findOneById(req.params.id);
    res.render("admin/product-edit-form", { product });
  },

  // ----- EDIT ONE product -----
  update: (req, res) => {
    // Find one, edit & save
    adminServices.editOne(req.params.id, req.body, req.file);
    res.redirect("/products");
  },

  // ----- DELETE ONE product -----
  destroy : (req, res) => {
		adminServices.destroyOne(req.params.id);
		res.redirect("/products")
	}
};

module.exports = adminController;
