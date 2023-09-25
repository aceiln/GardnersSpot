const sequelize = require('./config/connect');
const Plant = require('./models/Plant');
const Zone = require('./models/Zone');

class PlantZone extends Model {}

PlantZone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Other properties specific to the join table
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'plant_zone', // The table name in the database
  }
);

module.exports = PlantZone;
// Define associations 
Plant.belongsToMany(Zone, { through: 'PlantZone' });
Zone.belongsToMany(Plant, { through: 'PlantZone' });

// Sync the database to create tables (with { force: true } during development)
sequelize.sync({ force: process.env.NODE_ENV === 'development' }).then(() => {
  console.log('Database synced');
});