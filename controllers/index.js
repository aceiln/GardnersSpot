const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const zoneRoutes = require('./zoneRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/zone', zoneRoutes)

module.exports = router;