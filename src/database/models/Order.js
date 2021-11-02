module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    purchase_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    external_reference: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  };

  const config = {
    timestamps: false,
  };

  const model = sequelize.define("Order", cols, config);

  // Table associations
  model.associate = function (models) {
    model.belongsTo(models.User, {
      as: "users",
      foreignKey: "user_id",
    });
  }

    model.associate = function (models) {
      model.belongsTo(models.Address, {
        as: "adressess",
        foreignKey: "address_id",
      })
    };

    model.belongsToMany(models.Product, {
      as: "products",
      through: "order_product",
      foreignKey: "order_id",
      otherKey: "product_id",
      timestamps: false,
    });

  return model;
};
