const userServices = require('../services/user-services.js');
const db = require('../database/models');

let loginMiddlewares = {
  userLoggedMiddleware: async (req, res, next) => {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    const user = await db.User.findOne({
      where: {
        email: emailInCookie,
      },
    });
    console.log(user);

    if (user) {
      res.locals.isLogged = true;
      res.locals.userLogged = user;
    }

    next();
  },

  guestMiddleware: (req, res, next) => {
    if (req.session.usuarioLogueado == undefined) {
      next();
    } else {
      return res.redirect('/users/userDetail');
    }
    next();
  },

  authMiddleware: (req, res, next) => {
    if (req.session.usuarioLogueado != undefined) {
      next();
    } else {
      res.redirect('/users/login');
    }
  },
};

module.exports = loginMiddlewares;
