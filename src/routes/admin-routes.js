const express = require("express");
const path = require('path');
const adminController = require("../controllers/admin-controller");
const router = express.Router();

// MULTER
const multer = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/img/products"),
    filename: (req,file,cb) => {
        // VAlidar el tamaño del archivo
        //if(file.size > 10 * 1000 * 1000){
        //    cb(new Error("Archivo demasiado grande"))}
        cb(null,Date.now() + file.originalname)
    }
})

const uploader = multer({
    storage
})

/*** CREATE ONE PRODUCT ***/ 
router.get('/product/create', adminController.create); 
router.post('/product/', uploader.single("img"), adminController.store); 


module.exports = router;