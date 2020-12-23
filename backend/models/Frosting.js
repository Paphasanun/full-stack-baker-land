module.exports = (sequelize, DataTypes) => {
    const Frosting = sequelize.define(
      "Frosting",
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
        tableName: "frostings",
        timestamps: false,
      }
    );
  
    Frosting.associate = models => {
        Frosting.hasMany(models.Cake, {foreignKey: "frosting_id"})
    };
  
    return Frosting;
  };
  