const seedZones = require('./zoneSeeder');
const sequelize = require('../config/connect');

sequelize.sync({ force: true }).then(() => {
 seedZones()
});