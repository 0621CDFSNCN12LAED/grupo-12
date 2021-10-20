const express = require("express");
const router = express.Router();

const productController = require("../controllers/products-controller");

// ---- GET ALL PRODUCTS -----
router.get("/", productController.viewAll);

//------ GO TO CATEGORY PAGE ---------
router.get("/category/:category", productController.viewCategory);

// ------ GET ONE PRODUCT ---------
router.get("/:id", productController.detail);

// ---- GO TO CART ----
router.get("/cart/productCart", productController.cart);

// ---- NOT IN USE ----
router.get("/fullpage", productController.fullpage);

module.exports = router;
