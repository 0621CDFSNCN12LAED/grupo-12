const express = require('express');
const router = express.Router();

const apiUsersRouter = require('./users-routes');
const apiProductsRouter = require('./products-routes');

router.use(apiUsersRouter);
router.use(apiProductsRouter);

module.exports = router;
