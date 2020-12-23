module.exports = (sequelize, DataTypes) => {
  const Shape = sequelize.define(
    "Shape",
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
      tableName: "shapes",
      timestamps: false,
    }
  );

  Shape.associate = models => {
    Shape.hasMany(models.Cake, {foreignKey: "shape_id"})
  };

  return Shape;
};
