module.exports = (sequelize, DataTypes) => {
    const Topping = sequelize.define(
      "Topping",
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
        tableName: "toppings",
        timestamps: false,
      }
    );
  
    Topping.associate = models => {
        Topping.hasMany(models.Cake, {foreignKey: "topping_id"})
    };
  
    return Topping;
  };
  