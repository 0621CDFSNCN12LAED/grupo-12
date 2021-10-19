const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("firstName").notEmpty().withMessage("Debe ingresar su nombre"),
  body("lastName").notEmpty().withMessage("Debe ingresar su apellido"),
  body("email")
    .notEmpty()
    .withMessage("Debe ingresar su e-mail")
    .bail()
    .isEmail()
    .withMessage("La dirección de e-mail ingresada no es válida"),
  body("password1")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .isStrongPassword()
    .withMessage("La contraseña es muy débil")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
];
