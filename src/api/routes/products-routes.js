const express = require('express');
const router = express.Router();

const apiProductController = require('../controllers/products-controller');

router.get('/products', apiProductController.list);

router.get('/products/:id', apiProductController.detail);

module.exports = router;
