// Requires
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
const UserModel = require('../models/users-model.js')



const mainController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  processLogin: (req,res) => {
    let userToLogin = UserModel.findbyField('email', req.body.email);

    if(userToLogin) {
        let isOkPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
        if(isOkPassword){
            //Logueo Exitoso

            //guardar el usuario en session
            delete userToLogin.password
            req.session.usuarioLogueado = userToLogin
            //console.log(userToLogin)

            res.render('./users/userDetail', {user: JSON.stringify(userToLogin)} ) 
        }
        // Contraseña incorrecta
        return res.render('./users/login', {errors: {
            email: {
                msg: "Las credenciales son inválidas"
            }
        }
        })
    }
    // Mail no encontrado
    return res.render('./users/login', {errors: {
        email: {
            msg: "No se encuentra este email en nuestra base de datos"
        }
    }
    })

},
  register: (req, res) => {
    res.render("./users/register");
  },
  createUser: (req,res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.isEmpty()) {
        let userInDB = UserModel.findbyField('email', req.body.email)
        if (userInDB) {
            let errorUserLogged = [{
                email: {
                    msg: "Este mail ya esta registrado"
                    
                }
            }
               ]
            return res.render('./users/login', {errors: errorUserLogged});
        }
        let userToCreate = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password1,10),
            category: "viewer",
            image: "IMAGEN HARCODEADA POR EL MOMENTO"
        }
        let userCreated = UserModel.create(userToCreate)
        return res.render('./users/login', {user: userToCreate});


    } else {
        return res.render('./users/register', {errors: resultValidation.errors})

    }
  }
};

module.exports = mainController;