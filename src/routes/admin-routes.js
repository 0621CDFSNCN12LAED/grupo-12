// ***** Requires *****
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

// ***** Controller Require *****
const adminController = require("../controllers/admin-controller");

// ***** Initializing MULTER *****
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/products"),
  filename: (req, file, cb) => {
    // Validar el tamaño del archivo
    //if(file.size > 10 * 1000 * 1000){
    //    cb(new Error("Archivo demasiado grande"))}
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploader = multer({ storage });

// ----- CREATE ONE PRODUCT -----
router.get("/product/create", adminController.create);
router.post("/product", uploader.single("img"), adminController.store);

// ----- EDIT ONE PRODUCT -----
router.get("/product/:id/edit", adminController.edit);
router.put("/product/:id", uploader.single("img"), adminController.update);

// ----- DELETE ONE PRODUCT -----
router.delete("/product/:id", adminController.destroy);

module.exports = router;
