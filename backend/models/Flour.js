module.exports = (sequelize, DataTypes) => {
    const Flour = sequelize.define(
      "Flour",
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
        tableName: "flours",
        timestamps: false,
      }
    );
  
    Flour.associate = models => {
        Flour.hasMany(models.Cake, {foreignKey: "flour_id"})
    };
  
    return Flour;
  };
  