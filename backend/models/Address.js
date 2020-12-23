module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {

      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_default: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
      tableName: "addresses",
      timestamps: false
    });

    Address.associate = models => {
      Address.belongsTo(models.District, {foreignKey: "district_id"})
      Address.belongsTo(models.SubDistrict, {foreignKey: "district_id"})
    }
  
    return Address;
  }