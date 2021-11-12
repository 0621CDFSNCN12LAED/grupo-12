module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  };

  const config = {
    timestamps: false,
  };

  const model = sequelize.define('Cart', cols, config);

  // Table associations
  model.associate = function (models) {
    model.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'user_id',
    });

    model.belongsToMany(models.Product, {
      as: 'products',
      through: 'cart_product',
      foreignKey: 'cart_id',
      otherKey: 'product_id',
      timestamps: false,
    });
  };
  return model;
};
