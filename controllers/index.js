const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const zoneRoutes = require('./zoneRoutes');
// const postRoutes = require('./postRoutes'); // Import postRoutes

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/zone', zoneRoutes);
// router.use('/post', postRoutes); 

module.exports = router;