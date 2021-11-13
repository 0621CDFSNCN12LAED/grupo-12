module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: 'default-img.jpg',
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    discount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    starred: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    deleted: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  };

  const config = {
    timestamps: false,
  };

  const model = sequelize.define('Product', cols, config);

  // Table associations
  model.associate = function (models) {
    model.belongsTo(models.Category, {
      as: 'categories',
      foreignKey: 'category_id',
    });

    model.belongsTo(models.Subcategory, {
      as: 'subcategories',
      foreignKey: 'subcategory_id',
    });

    model.belongsToMany(models.User, {
      as: 'users',
      through: 'user_product',
      foreignKey: 'product_id',
      otherKey: 'user_id',
      timestamps: false,
    });

    model.belongsToMany(models.Order, {
      as: 'orders',
      through: 'order_product',
      foreignKey: 'product_id',
      otherKey: 'order_id',
      timestamps: false,
    });
  };

  return model;
};
