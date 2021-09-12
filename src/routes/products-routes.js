const express = require("express");

const productController = require("../controllers/products-controller");
const router = express.Router();

router.get("/productCart", productController.cart);

router.get("/fullpage", productController.fullpage);

// ---- GET ALL PRODUCTS -----
router.get("/", productController.allProducts);


// ------ GET ONE PRODUCT ---------
router.get("/:id", productController.productDetail);

//------ GET CATEGORY PAGE ---------
router.get("/category/:category", productController.productCategory);





module.exports = router;
