const db = require('../../database/models');
const moment = require('moment');

module.exports = {
  list: async (req, res) => {
    const users = await db.User.findAll();

    const abbrUsers = users.map((user) => {
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

    if (user) {
      user.image = `http://localhost:3000/img/avatars/${user.image}`;

      abbrUser = {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        image: user.image,
        'created-at': moment.utc(user.createdAt).format('MM/DD/YYYY'),
      };
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
