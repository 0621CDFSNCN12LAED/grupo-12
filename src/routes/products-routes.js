const express = require("express");

const productController = require("../controllers/products-controller");
const router = express.Router();

// ---- GET ALL PRODUCTS -----
router.get("/", productController.viewAll);

//------ GO TO CATEGORY PAGE ---------
router.get("/category/:category", productController.viewCategory);

// ------ GET ONE PRODUCT ---------
router.get("/:id", productController.detail);

// ---- GO TO CART ----
router.get("/productCart", productController.cart);

// ---- NOT IN USE ----
router.get("/fullpage", productController.fullpage);

module.exports = router;
