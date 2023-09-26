const express = require('express');
const router = express.Router();
const {Zone}  = require('../models'); 

// Update the route to fetch and render blog posts for a specific zone
router.get('/:zoneId', async (req, res) => {
  try {
    const zoneId = req.params.zoneId;
    // Fetch forum posts for the specified zone 
    const zone = await Zone.findByPk(zoneId);
    console.log(zone);
res.json(zone);
    // res.render('zoneForum', { zone: zoneId, posts: forumPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
