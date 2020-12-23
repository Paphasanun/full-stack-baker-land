module.exports = (sequelize, DataTypes) => {
    const AddOnFilling = sequelize.define(
      "AddOnFilling",
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
        tableName: "addOnFillings",
        timestamps: false,
      }
    );
  
    AddOnFilling.associate = models => {
      AddOnFilling.hasMany(models.Cake, {foreignKey: "addOnFilling_id"})
    };
  
    return AddOnFilling;
  };
  