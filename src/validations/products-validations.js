const { body } = require('express-validator');
const db = require('../database/models');

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('Debe ingresar un nombre de producto')
    .bail()
    .isLength({ min: 5 })
    .withMessage('El nombre debe contener al menos 5 caracteres'),
  body('description')
    .notEmpty()
    .withMessage('Debe ingresar una descripción de producto')
    .bail()
    .isLength({ min: 20 })
    .withMessage('La descripción debe contener al menos 20 caracteres'),
  body('category')
    .notEmpty()
    .withMessage('Debes ingresar una categoría')
    .bail(),
  body('subcategory')
    .notEmpty()
    .withMessage('Debes ingresar una subcategoría')
    .bail(),
  body('price')
    .notEmpty()
    .withMessage('Debes ingresar un precio')
    .bail(),
  body('image')
    .custom((value, { req }) => {
        let file = req.file
        if(!file) {
          throw new Error('Debes subir una imagen');
        } else if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/gif" || file.mimetype == "image/jpeg"){
          return true
        } else {
          throw new Error('El archivo debe ser de formato PNG, JPG, JPEG o GIF');
        }

    }),

];
