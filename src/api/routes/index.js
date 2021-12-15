const express = require('express');
const router = express.Router();

const apiUsersRouter = require('./users-routes');
const apiProductsRouter = require('./products-routes');
const apiCategoriesRouter = require('./categories-routes');
const apiOrdersRouter = require('./orders-routes');

router.use(apiUsersRouter);
router.use(apiProductsRouter);
router.use(apiCategoriesRouter);
router.use(apiOrdersRouter);

module.exports = router;
