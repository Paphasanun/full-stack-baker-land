module.exports = (sequelize, DataTypes) => {
    const Layer = sequelize.define(
      "Layer",
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
        tableName: "layers",
        timestamps: false,
      }
    );
  
    Layer.associate = models => {
      Layer.hasMany(models.Cake, {foreignKey: "layer_id"})
    };
  
    return Layer;
  };
  