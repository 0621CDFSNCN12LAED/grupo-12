// Requires
const express = require("express");
const mainController = require("../controllers/main-controller");

const router = express.Router();

// ---- GO TO HOME PAGE ----
router.get("/", mainController.home);

// ---- GO TO LOGIN PAGE ----
router.get("/users/login", mainController.login);

// ---- GO TO REGISTER PAGE ----
router.get("/users/register", mainController.register);

module.exports = router;
