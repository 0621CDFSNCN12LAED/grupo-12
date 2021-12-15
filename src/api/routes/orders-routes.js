const express = require('express');
const router = express.Router();

const apiOrdersController = require('../controllers/orders-controller');

router.get('/orders', apiOrdersController.list);

router.get('/orders/:id', apiOrdersController.detail);

module.exports = router;
