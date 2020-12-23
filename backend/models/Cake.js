module.exports = (sequelize, DataTypes) => {
    const Cake = sequelize.define(
      "Cake",
      {
        cake_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        total_price: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "cakes",
        timestamps: true,
      }
    );
  
    Cake.associate = models => {
        Cake.belongsTo(models.Shape, {foreignKey: "shape_id"});
        Cake.belongsTo(models.Size, {foreignKey: "size_id"});
        Cake.belongsTo(models.Flour, {foreignKey: "flour_id"});
        Cake.belongsTo(models.Sweet, {foreignKey: "sweet_id"});
        Cake.belongsTo(models.Layer, {foreignKey: "layer_id"});
        Cake.belongsTo(models.Flavor, {foreignKey: "flavor_id"});
        Cake.belongsTo(models.Filling, {foreignKey: "filling_id"});
        Cake.belongsTo(models.AddOnFilling, {foreignKey: "addOnFilling_id"});
        Cake.belongsTo(models.Frosting, {foreignKey: "frosting_id"});
        Cake.belongsTo(models.Dressing, {foreignKey: "dressing_id"});
        Cake.belongsTo(models.Topping, {foreignKey: "topping_id"});
    };
  
    return Cake;
  };
  