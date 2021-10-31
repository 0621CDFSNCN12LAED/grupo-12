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
      defaultValue: "no-image.jpg",
    },
  };

  const config = {
    timestamps: false,
  };

  const model = sequelize.define("User", cols, config);

  // Table associations
  model.associate = function (models) {
    model.hasMany(models.Order, {
      as: "orders",
      foreignKey: "user_id",
    });

    model.hasMany(models.Address, {
      as: "addresses",
      foreignKey: "user_id",
    });
  };

  return model;
};
