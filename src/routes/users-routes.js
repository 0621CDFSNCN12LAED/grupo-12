// Requires
const express = require("express");
const usersController = require("../controllers/users-controller");

const router = express.Router();
const {check, body, validationResult} = require('express-validator')


// ----- VALIDATIONS --------

let loginValidation = [
    body('email').isEmail().withMessage('Debes ingresar un mail válido'),
    body('password1').isLength({min: 4}).withMessage("Contraseña debe contener mínimo 4 caracteres")
  ]

// ---- LOGIN PAGE ----
router.get("/login", usersController.login);
router.post("/login", usersController.processLogin);


// ---- REGISTER PAGE ----
router.get("/register", usersController.register);
router.post("/register",loginValidation, usersController.createUser);


module.exports = router;
