const express = require('express');
const router = express.Router();

const apiCategoriesController = require('../controllers/categories-controller');

router.get('/categories', apiCategoriesController.list);

router.get('/categories/:id', apiCategoriesController.detail);

router.get('/subcategories', apiCategoriesController.subList);

router.get('/subcategories/:id', apiCategoriesController.subDetail);

module.exports = router;
