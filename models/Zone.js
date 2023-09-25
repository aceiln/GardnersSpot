const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect'); 
const Plant = require('./plant'); // Import the Plant model

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
// Set up the many-to-many association with Plant
Zone.belongsToMany(Plant, { through: 'PlantZone' });

module.exports = Zone;