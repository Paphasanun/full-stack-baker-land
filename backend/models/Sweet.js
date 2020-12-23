module.exports = (sequelize, DataTypes) => {
  const Sweet = sequelize.define(
    "Sweet",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "sweets",
      timestamps: false,
    }
  );

  Sweet.associate = (models) => {
    Sweet.hasMany(models.Cake, { foreignKey: "sweet_id" });
  };

  return Sweet;
};
