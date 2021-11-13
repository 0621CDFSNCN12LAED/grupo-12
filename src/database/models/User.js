module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: 'no-image.jpg',
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  };

  const config = {
    timestamps: true,
    underscores: true,
  };

  const model = sequelize.define('User', cols, config);

  // Table associations
  model.associate = function (models) {
    model.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'user_id',
    });

    model.hasMany(models.Address, {
      as: 'addresses',
      foreignKey: 'user_id',
    });

    model.belongsToMany(models.Product, {
      as: 'products',
      through: 'user_product',
      foreignKey: 'user_id',
      otherKey: 'product_id',
      timestamps: false,
    });
  };

  return model;
};
