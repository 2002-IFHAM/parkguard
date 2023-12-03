module.exports = (sequelize, DataTypes) => {
  const data = sequelize.define("data", {
    plateNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chasisNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return data;
};
