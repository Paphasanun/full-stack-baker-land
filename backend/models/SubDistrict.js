module.exports = (sequelize, DataTypes) => {
    const SubDistrict = sequelize.define("SubDistrict", {
        sub_district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: "subDistricts",
      timestamps: false
    });

    SubDistrict.associate = (models) => {
      SubDistrict.belongsTo(models.District, { foreignKey: "district_id" });
      SubDistrict.hasMany(models.Address, { foreignKey: "subDistrict_id" });
    };
  
    return SubDistrict;
  }