const express = require('express');
const router = express.Router();

const apiUsersRouter = require('./users-routes');
const apiProductsRouter = require('./products-routes');
const apiCategoriesRouter = require('./categories-routes');

router.use(apiUsersRouter);
router.use(apiProductsRouter);
router.use(apiCategoriesRouter);

module.exports = router;
