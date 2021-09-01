const path = require("path");

const adminController = {
  create: (req, res) => {
    res.render("admin/adminProduct.ejs");
  }
};

module.exports = adminController;