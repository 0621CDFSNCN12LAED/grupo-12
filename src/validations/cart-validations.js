const { body } = require('express-validator');

module.exports = [
  body('address').notEmpty().withMessage('Por favor elija su dirección de envío').bail(),
  body('payment').notEmpty().withMessage('Por favor elija su método de pago preferido'),
];
