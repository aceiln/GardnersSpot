const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Replace with your database configuration

class Zone extends Model {}

Zone.init(
  {
    zone1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zone13: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Zone',
    timestamps: false,
  }
);

module.exports = Zone;