const db = require('../../database/models');
const Op = db.Sequelize.Op;
const moment = require('moment');

module.exports = {
  list: async (req, res) => {
    const users = await db.User.findAll();

    abbrUsers = users.map((user) => {
      return {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        link: `http://localhost:3000/api/users/${user.id}`,
      };
    });

    return res.json({
      meta: {
        count: users.length,
        status: 200,
        url: '/api/users',
      },
      data: abbrUsers,
    });
  },
  detail: async (req, res) => {
    const user = await db.User.findByPk(req.params.id);

    abbrUser = {
      id: user.id,
      name: user.first_name,
      'last-name': user.last_name,
      email: user.email,
      //category: user.category,
      image: user.image /* Falta mostrar link a la imagen -> AVERIGUAR */,
      'created-at': moment.utc(user.createdAt).format('MM/DD/YYYY'),
    };

    if (user) {
      res.json({
        meta: {
          status: 200,
          url: `/api/users/${req.params.id}`,
        },
        data: abbrUser,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: `/api/users/${req.params.id}`,
        },
        data: `No se encontró el usuario con id ${req.params.id}`,
      });
    }
  },
};

/** {
      id: users.id,
      name: users.first_name,
      'last-name': users.last_name,
      email: users.email,
      detail: `/api/users/${users.id}`,
      }
 */
