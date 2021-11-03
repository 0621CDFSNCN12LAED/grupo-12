// Requires
const express = require("express");
const router = express.Router();
const { check, body, validationResult } = require("express-validator");

// Controller require
const usersController = require("../controllers/users-controller");
const usersControllerDB = require("../controllers/users-controller-DB");


// ------ MIDDLEWARES --------
let LoginMiddlewares = require("../middlewares/loginMiddlewares");

// ----- VALIDATIONS --------
const registerValidations = require("../validations/register-validations");
const loginValidations = require("../validations/login-validations");

// ******** ROUTES CON DB JSON********
// Login
//router.get("/login", LoginMiddlewares.guestMiddleware, usersController.login);
//router.post("/login", loginValidations, usersController.processLogin);

// Register
//router.get("/register", LoginMiddlewares.guestMiddleware, usersController.register);
//router.post("/register", registerValidations, usersController.processRegister);

router.get("/check", function (req, res) {
  if (req.session.usuarioLogueado == undefined) {
    res.send("no estas logueado");
  } else {
    res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
  }
});

// User detail
router.get("/userDetail", LoginMiddlewares.authMiddleware, usersControllerDB.userDetail);

// Logout
router.get("/logout", usersControllerDB.logout);

// User address 
router.get("/address", usersControllerDB.createAddress);



// ********* DB ROUTES *********
router.get("/getAllUsers", usersControllerDB.getAll);

// Login
router.get("/login", LoginMiddlewares.guestMiddleware, usersControllerDB.login);
router.post("/login", loginValidations, usersControllerDB.processLogin);

// Register
router.get("/register", LoginMiddlewares.guestMiddleware, usersControllerDB.register);
router.post("/register", registerValidations,usersControllerDB.processRegister);

//Editado de usuarios
router.get("/edit",LoginMiddlewares.authMiddleware, usersControllerDB.editUser);
router.put("/edit", usersControllerDB.updateUser);





module.exports = router;
