module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    street_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    street_number: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    province: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    reference: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
  };

  const model = sequelize.define("Address", cols, config);

  // Table associations
  model.associate = function (models) {
    model.belongsTo(models.User, {
      as: "users",
      foreignKey: "user_id",
    });
  };

  return model;
};
