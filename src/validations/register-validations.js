const { body } = require('express-validator');
const db = require('../database/models');

module.exports = [
  body('firstName')
    .notEmpty()
    .withMessage('Debe ingresar su nombre')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Debe contener al menos 3 caracteres'),
  body('lastName')
    .notEmpty()
    .withMessage('Debe ingresar su apellido')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Debe contener al menos 3 caracteres'),
  body('email')
    .notEmpty()
    .withMessage('Debe ingresar su e-mail')
    .bail()
    .isEmail()
    .withMessage('La dirección de e-mail ingresada no es válida')
    .bail()
    .custom((value, { req }) => {
      return db.User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((user) => {
        if (user) {
          return Promise.reject('Este correo ya existe en nuestra base de datos');
        }
      });
    }),
  body('password1')
    .notEmpty()
    .withMessage('Debe ingresar una contraseña')
    .bail()
    .isStrongPassword()
    .withMessage('La contraseña es muy débil')
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Las contraseñas no coinciden');
      }
      return true;
    }),
];
