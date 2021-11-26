// ***** Requires *****
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

// ***** Controller Require *****
const adminController = require("../controllers/admin-controller-DB");

// -------- AUTH MIDDLEWARE -----------
let LoginMiddlewares = require("../middlewares/loginMiddlewares");
let productValidation = require('../validations/products-validations')

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
router.get("/product/create", /**LoginMiddlewares.authMiddleware,  */ adminController.create);
router.post("/product/create", uploader.single("image"),/** productValidation, */adminController.store);

// ----- EDIT ONE PRODUCT -----
router.get("/product/:id/edit", LoginMiddlewares.authMiddleware, adminController.edit);
router.put("/product/:id", uploader.single("image"), adminController.update);

// ----- DELETE ONE PRODUCT -----
router.delete("/product/:id", LoginMiddlewares.authMiddleware, adminController.destroy);

module.exports = router;
