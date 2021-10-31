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
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  };

  const config = {
    timestamps: false,
  };

  const model = sequelize.define("Subcategory", cols, config);

  // Table associations
  model.associate = function (models) {
    model.hasMany(models.Product, {
      as: "products",
      foreignKey: "subcategory_id",
    });
  };

  return model;
};
