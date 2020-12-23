module.exports = (sequelize, DataTypes) => {
    const Dressing = sequelize.define(
      "Dressing",
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
        tableName: "dressings",
        timestamps: false,
      }
    );
  
    Dressing.associate = models => {
        Dressing.hasMany(models.Cake, {foreignKey: "dressing_id"})
    };
  
    return Dressing;
  };
  