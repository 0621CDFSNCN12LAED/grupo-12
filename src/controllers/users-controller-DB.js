// Requires
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");


// ******* Users database ********
const db = require('../database/models')

// ******* Validation results ********
const { validationResult } = require("express-validator");

const mainController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  processLogin: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const userToLogin = await db.User.findOne({
        where: { email: req.body.email }
     })
     .then((resultUser) => {
       if (resultUser) {
        const isOkPassword = bcrypt.compareSync(req.body.password, resultUser.password);
        if (isOkPassword){
          //Logueo exitoso
          delete resultUser.password
          req.session.usuarioLogueado = resultUser;
          console.log(resultUser)
          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
          }
          res.redirect("/users/userDetail");
        } else {
          // Contraseña incorrecta
          res.render("./users/login", {
            errors: {
              credenciales: { msg: "Las credenciales son inválidas" },
            },
            oldValues: req.body,
            user: resultUser
          });
          return;
        }
       }
     }); 
    
    } else {
      res.render("./users/login", { errors: errors.mapped(), oldValues: req.body, user: resultUser });
    }
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  processRegister: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const user = {
        //id: userServicesDB.generateId(),
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password1, 10),
        category: "viewer",
        image: "template-image.jpg",
      };

      const userToRegister = await db.User.findOne({
        where: { email: req.body.email }
      })
      if(userToRegister){
        console.log("usuario ya registrado")
        res.render("./users/login", {user : userToRegister})
      } else {
        let userCreated = await db.User.create(user)
        res.render("./users/login", {user : user})
      }

    } else {
      res.render("./users/register", { errors: errors.mapped(), oldValues: req.body });
    }
  },
  userDetail: async (req, res) => {
    let id = req.session.usuarioLogueado.id
    let UserToEdit = await db.User.findByPk(id)
    let UserAddressDB = await db.Address.findAll(
      {
        where: {
          user_id: id
        }
      }
    )
    let UserAddress = {
      length: UserAddressDB.length,
      addresses: UserAddressDB
    }
    console.log(UserAddress.addresses[3])

    res.render("./users/userDetail", { user: UserToEdit, address: UserAddress });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/users/login");
  },
  getAll: async (req,res) => {
    const users = await db.User.findAll()
    res.send(users)
  },
  editUser: async (req,res) => {
    let id = req.session.usuarioLogueado.id
    let UserToEdit = await db.User.findByPk(id)
    res.render("./users/userEdit",{ user: UserToEdit });
  },
  updateUser: async (req,res) => {
    let id = req.session.usuarioLogueado.id
    
     const userUpdated = await db.User.update(
      req.body,  { where: { id: id }
    })   
    res.redirect("/users/userDetail")

  },
  //ADDRESS
  showAddress: (req,res) => {
    res.render("./users/address");
  },
  createAddress: async (req,res) => {
    let user_id = req.session.usuarioLogueado.id
    const Address = {
      user_id: user_id,
      street_name: req.body.street_name,
      street_number: req.body.street_number,
      city: req.body.city,
      province: req.body.province,
      country: req.body.country,
      reference: req.body.reference,
      phone: req.body.phone
    }
    let AddressToCreate = await db.Address.create(Address)
    res.redirect("/users/userDetail")

  }

};

module.exports = mainController;
