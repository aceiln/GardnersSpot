
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Plant extends Model {}

Plant.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    hardinessZone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // We can add more if we want to... 
  },
  {
    sequelize,
    modelName: 'plant',
  }
);

module.exports = Plant;