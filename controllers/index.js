const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const forumRoutes = require('./forumRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/zone', forumRoutes)

module.exports = router;