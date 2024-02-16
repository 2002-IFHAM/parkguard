module.exports = (sequelize, DataTypes) => {
  const CarVerification = sequelize.define("CarVerification", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carModel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carYear: {
      type: DataTypes.INTEGER, // Corrected data type
      allowNull: false,
    },
    carRegistrationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plateNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chassisNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return CarVerification;
};
