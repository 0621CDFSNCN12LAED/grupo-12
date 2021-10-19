// Requires
const express = require("express");
const router = express.Router();
const { check, body, validationResult } = require("express-validator");

// Controller require
const usersController = require("../controllers/users-controller");

// ------ MIDDLEWARES --------
let LoginMiddlewares = require("../middlewares/loginMiddlewares");

// ----- VALIDATIONS --------
const registerValidations = require("../validations/register-validations");
const loginValidations = require("../validations/login-validations");

// ******** ROUTES ********
// Login
router.get("/login", LoginMiddlewares.guestMiddleware, usersController.login);
router.post("/login", loginValidations, usersController.processLogin);

// Register
router.get("/register", LoginMiddlewares.guestMiddleware, usersController.register);
router.post("/register", registerValidations, usersController.createUser);

router.get("/check", function (req, res) {
  if (req.session.usuarioLogueado == undefined) {
    res.send("no estas logueado");
  } else {
    res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
  }
});

// User detail
router.get("/userDetail", LoginMiddlewares.authMiddleware, usersController.userDetail);

// Logout
router.get("/logout", usersController.logout);

module.exports = router;
