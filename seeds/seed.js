const seedZones = require('./zoneSeeder');
const seedPosts = require('./postSeeder'); 
const sequelize = require('../config/connect');

sequelize.sync({ force: true }).then(async () => {
  await seedZones();
  await seedPosts(); 
});