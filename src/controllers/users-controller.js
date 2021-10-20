// Requires
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const userServices = require("../services/user-services.js");

// ******* Users database ********
const usersFilePath = path.join(__dirname, "../data/usersDB.json");

// ******* Validation results ********
const { validationResult } = require("express-validator");

const mainController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const userToLogin = userServices.findbyField("email", req.body.email);
      if (userToLogin) {
        const isOkPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
        if (isOkPassword) {
          //Logueo Exitoso
          //guardar el usuario en session
          delete userToLogin.password;
          req.session.usuarioLogueado = userToLogin;
          //console.log(userToLogin)
          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
          }
          res.redirect("/users/userDetail");
        } else {
          // Contraseña incorrecta
          res.render("./users/login", {
            errors: {
              email: { msg: "Las credenciales son inválidas" },
            },
          });
          return;
        }
      }
    } else {
      res.render("./users/login", { errors: errors.mapped(), oldValues: req.body });
    }
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      /*    
    let userInDB = userServices.findbyField("email", req.body.email);
      if (userInDB) {
        let errorUserLogged = [
          {
            email: {
              msg: "Este mail ya esta registrado",
            },
          },
        ];
*/
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password1, 10),
        category: "viewer",
        avatar: "IMAGEN HARCODEADA POR EL MOMENTO",
      };
      let users;
      const usersInDB = fs.readFileSync(usersFilePath, "utf-8");
      if (usersInDB == "") {
        users = [];
      } else {
        users = JSON.parse(usersInDB);
      }
      users.push(user);

      usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(path.join(__dirname, "../data/usersDB.json"), usersJSON);

      res.redirect("/users/login");
      return;
    } else {
      res.render("./users/register", { errors: errors.mapped(), oldValues: req.body });
    }
    /*
      let userToCreate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password1, 10),
        category: "viewer",
        image: "IMAGEN HARCODEADA POR EL MOMENTO",
      };
      let userCreated = userServices.create(userToCreate);
      return res.render("./users/login", { user: userToCreate });
    } else {
      return res.render("./users/register", { errors: resultValidation.errors });
    }
*/
  },
  userDetail: (req, res) => {
    console.log(req.session.usuarioLogueado);
    res.render("./users/userDetail", { user: req.session.usuarioLogueado });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/users/login");
  },
};

module.exports = mainController;
