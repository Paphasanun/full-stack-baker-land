module.exports = (sequelize, DataTypes) => {
    const Filling = sequelize.define(
      "Filling",
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
        tableName: "fillings",
        timestamps: false,
      }
    );
  
    Filling.associate = models => {
        Filling.hasMany(models.Cake, {foreignKey: "filling_id"})
    };
  
    return Filling;
  };
  