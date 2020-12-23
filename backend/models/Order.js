module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {

        status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      occasion: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      tableName: "Orders",
      timestamps: false
    });
  
    return Order;
  }