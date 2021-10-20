const userServices = require("../services/user-services.js");

let LoginMiddlewares = {
  userLoggedMiddleware: (req, res, next) => {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = userServices.findbyField("email", emailInCookie);

    if (userFromCookie) {
      req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
    }
    next();
  },
  guestMiddleware: (req, res, next) => {
    if (req.session.usuarioLogueado == undefined) {
      next();
    } else {
      return res.redirect("/users/userDetail");
    }
    next();
  },
  authMiddleware: (req, res, next) => {
    if (req.session.usuarioLogueado != undefined) {
      next();
    } else {
      res.redirect("/users/login");
    }
  },
};

module.exports = LoginMiddlewares;
