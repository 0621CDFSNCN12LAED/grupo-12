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
  };

  const config = {
    tablename: 'user_product',
    timestamps: false,
  };

  const model = sequelize.define('UserProduct', cols, config);

  // Table associations
  model.associate = function (models) {
    model.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'user_id',
    });

    model.belongsTo(models.Product, {
      as: 'products',
      foreignKey: 'product_id',
    });
  };
  return model;
};
