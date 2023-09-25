const express = require('express');
const router = express.Router();
const { ForumPost } = require('../models'); 

// Route to view the forum for a specific zone
router.get('/zone/:zoneId', async (req, res) => {
  try {
    const zoneId = req.params.zoneId;
    // Fetch forum posts for the specified zone 
    const forumPosts = await ForumPost.findAll({
      where: { zoneId },
    });

    res.render('zone-forum', { zone: zoneId, posts: forumPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
