
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

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

// Set up the many-to-many association with Zone
Plant.belongsToMany(Zone, { through: 'PlantZone' });

module.exports = Plant;