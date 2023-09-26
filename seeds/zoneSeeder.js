const { Zone } = require('../models');

const zoneNames = [
  'Zone 1',
  'Zone 2',
  'Zone 3',
  'Zone 4',
  'Zone 5',
  'Zone 6',
  'Zone 7',
  'Zone 8',
  'Zone 9',
  'Zone 10',
  'Zone 11',
  'Zone 12',
  'Zone 13',
];

const seedZones = async () => {
  for (const name of zoneNames) {
    await Zone.create({ name });
  }
};



module.exports = seedZones;
