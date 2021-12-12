module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    tableName: 'order_product',
    timestamps: false,
  };

  const model = sequelize.define('OrderProduct', cols, config);

  // Table associations
  model.associate = function (models) {
    model.belongsTo(models.Order, {
      as: 'orders',
      foreignKey: 'order_id',
    });

    model.belongsTo(models.Product, {
      as: 'products',
      foreignKey: 'product_id',
    });
  };
  return model;
};
