module.exports = (sequelize, DataTypes) => {
    const Flavor = sequelize.define(
      "Flavor",
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
        tableName: "flavors",
        timestamps: false,
      }
    );
  
    Flavor.associate = models => {
        Flavor.hasMany(models.Cake, {foreignKey: "flavor_id"})
    };
  
    return Flavor;
  };
  