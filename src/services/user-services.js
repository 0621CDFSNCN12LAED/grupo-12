//1. Guardar al usuario en la DB
//2. Buscar al usuario que se quiere loguear
//3. Buscar a un usuario por si id
//4. Editar la información de un usuario
//5. Eliminar a un usuario de la DB

// ***** Global requires *****
const path = require("path");
const fs = require("fs");

// ***** Database folder *****
const usersFilePath = path.join(__dirname, "../data/usersDB.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const userServices = {
  users() {
    return users;
  },
  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },
  findAll: function () {
    const allUsers = this.users().filter((user) => user);
    return allUsers;
  },
  findbyPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },
  findbyField: function (field, value) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser[field] === value);
    return userFound;
  },
  create: function (userData) {
    let allUsers = this.findAll();
    let newUser = {
      id: this.generateId(),
      ...userData,
    };
    allUsers.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, 2));
    return newUser;
  },
  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);
    fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, 2));
    return true;
  },
};
module.exports = userServices;
