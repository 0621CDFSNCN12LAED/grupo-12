const db = require('../../database/models');
const moment = require('moment');

module.exports = {
  list: async (req, res) => {
    const orders = await db.Order.findAll();
    console.log(orders)

    const abbrOrders = orders.map((order) => {
      return {
        id: order.id,
        order_number: order.order_number,
        purchase_date: order.purchase_date,
        total_amount: order.total_amount,
        link: `http://localhost:3001/api/orders/${order.id}`,
      };
    });

    return res.json({
      meta: {
        count: orders.length,
        status: 200,
        url: '/api/orders',
      },
      data: abbrOrders,
    });
  },

  detail: async (req, res) => {
    const order = await db.Order.findByPk(req.params.id);

    if (order) {
      // Get corresponding user for the order
      const user = await db.User.findOne({
        include: [{ association: 'orders' }],
        where: {
          id: order.user_id,
        },
      });

      const abbrUser = {
        name: `${user.first_name} ${user.last_name}`,
        link: `http://localhost:3001/api/users/${user.id}`,
      };

      // Get corresponding items for the order
      const productsInOrder = await db.OrderProduct.findAll({
        include: [{ association: 'orders' }],
        where: {
          order_id: order.id,
        },
      });

      // Get the detail of each item
      // Map method returns a promise for each item
      const promises = productsInOrder.map(async (item) => {
        const product = await db.Product.findOne({
          include: [{ association: 'orders' }],
          where: {
            id: item.product_id,
          },
        });
        return {
          id: product.id,
          name: product.name,
          quantity: item.quantity,
          link: `http://localhost:3001/api/products/${product.id}`,
        };
      });
      // Await all promises to be resolved and store them in 'abbrProducts' const
      const abbrProducts = await Promise.all(promises);

      abbrOrder = {
        order_number: order.order_number,
        purchase_date: moment(order.purchase_date).format('LLL'),
        total_amount: order.total_amount,
        user: abbrUser,
        products: abbrProducts,
      };
      res.json({
        meta: {
          status: 200,
          url: `/api/orders/${req.params.id}`,
        },
        data: abbrOrder,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: `/api/orders/${req.params.id}`,
        },
        data: `No se encontró la orden con id ${req.params.id}`,
      });
    }
  },
};
