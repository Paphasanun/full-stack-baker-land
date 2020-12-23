module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("District", {

        district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: "districts",
      timestamps: false
    });

    District.associate = (models) => {
      District.hasMany(models.SubDistrict, { foreignKey: "district_id" });
      District.hasMany(models.Address, { foreignKey: "district_id" });
    };
  
  
    return District;
  }