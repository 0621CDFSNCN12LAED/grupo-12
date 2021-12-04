const express = require('express');
const router = express.Router();

const apiCategoriesController = require('../controllers/categories-controller');

router.get('/categories', apiCategoriesController.list);

router.get('/categories/:id', apiCategoriesController.detail);

module.exports = router;
