module.exports = (sequelize, DataTypes) => {
    const CakeDatail = sequelize.define("CakeDatail", {

        name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
      },
      shape: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sweetness: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      layer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flavor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filling: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      add_on_filling: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frosting: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dressing: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topping: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, {
      tableName: "cakeDatails",
      timestamps: false
    });
  
    return CakeDatail;
  }