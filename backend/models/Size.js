module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define(
      "Size",
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
        tableName: "sizes",
        timestamps: false,
      }
    );
  
    Size.associate = models => {
        Size.hasMany(models.Cake, {foreignKey: "size_id"})
    };
  
    return Size;
  };
  