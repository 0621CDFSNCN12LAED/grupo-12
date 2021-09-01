const express = require("express");

const mainController = require("../controllers/main-controller");

const router = express.Router();

// Definimos las rutas
router.get("/", mainController.home);

router.get("/login", mainController.login);

router.get("/register", mainController.register);


module.exports = router;
