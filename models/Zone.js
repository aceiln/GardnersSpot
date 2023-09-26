
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Zone extends Model {}

Zone.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // We can add more if we want to... 
  },
  {
    sequelize,
    modelName: 'zone',
  }
);



module.exports = Zone;