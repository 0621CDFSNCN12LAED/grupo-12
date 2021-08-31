const express = require("express");

const productController = require("../controllers/products-controller");

const router = express.Router();

router.get("/productCart", productController.cart);

router.get("/productDetail", productController.productDetail);

router.get("/fullpage", productController.fullpage);

module.exports = router;
