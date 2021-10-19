const { body } = require("express-validator");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Por favor ingrese su correo electrónico")
    .bail()
    .isEmail()
    .withMessage("La dirección de e-mail ingresada es inválida"),
  body("password").notEmpty().withMessage("Por favor ingrese su contraseña"),
];
