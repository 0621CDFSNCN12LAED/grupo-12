// Requires
const express = require("express");
const usersController = require("../controllers/users-controller");

const router = express.Router();
const {check, body, validationResult} = require('express-validator')

// ------ MIDDLEWARES --------

let LoginMiddlewares = require('../middlewares/loginMiddlewares')

// ----- VALIDATIONS --------

let loginValidation = [
    body('email').isEmail().withMessage('Debes ingresar un mail válido'),
    body('password1').isLength({min: 4}).withMessage("Contraseña debe contener mínimo 4 caracteres")
  ]

// ---- LOGIN PAGE ----
router.get("/login",LoginMiddlewares.guestMiddleware, usersController.login);
router.post("/login", usersController.processLogin);


// ---- REGISTER PAGE ----
router.get("/register",LoginMiddlewares.guestMiddleware, usersController.register);
router.post("/register",loginValidation, usersController.createUser);

router.get('/check', function(req,res){
    if(req.session.usuarioLogueado == undefined){
      res.send("no estas logueado")
    } else {
      res.send("El usuario logueado es: " + req.session.usuarioLogueado.email)
    }
  });

// ------- USER DETAIL -------
router.get("/userDetail",LoginMiddlewares.authMiddleware, usersController.userDetail);


// -------- LOGOUT ----------
router.get('/logout', usersController.logout);


module.exports = router;
