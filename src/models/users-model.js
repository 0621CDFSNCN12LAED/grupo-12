//1. Guardar al usuario en la DB
//2. Buscar al usuario que se quiere loguear
//3. Buscar a un usuario por si id
//4. Editar la información de un usuario
//5. Eliminar a un usuario de la DB

const fs = require("fs");

const User = {
  fileName: "./src/data/usersDB.json",
  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
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
    return this.getData();
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
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 4));
    return newUser;
  },
  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, 4));
    return true;
  },
};
module.exports = User;
