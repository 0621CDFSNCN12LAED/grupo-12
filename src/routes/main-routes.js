// Requires
const express = require('express');
const mainController = require('../controllers/main-controller-DB');

const router = express.Router();

// ---- GO TO HOME PAGE ----
router.get('/', mainController.home);

// ---- SEARCH PAGE ----
router.get('/search', mainController.search);

module.exports = router;
