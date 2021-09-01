const express = require("express");
const mainController = require("../controllers/admin-controller");
const router = express.Router();

router.get("/", mainController.create);

module.exports = router;