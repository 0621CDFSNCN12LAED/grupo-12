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
        link: `http://localhost:3001/api/users/${user.id}`,
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
      user.image = `http://localhost:3001/img/avatars/${user.image}`;

      // Get corresponding orders for the user
      const ordersByUser = await db.Order.findAll({
        include: [{ association: 'users' }],
        where: {
          user_id: user.id,
        },
      });

      const abbrOrders = ordersByUser.map((order) => {
        return {
          order_number: order.order_number,
          link: `http://localhost:3001/api/orders/${order.id}`,
        };
      });

      abbrUser = {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        image: user.image,
        'user-since': moment.utc(user.createdAt).format('MM/DD/YYYY'),
        orders: abbrOrders,
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
