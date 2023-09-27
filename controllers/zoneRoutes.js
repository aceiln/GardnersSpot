const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// using sequelize model findAll method to get posts, but dont want all posts, so add where clause
router.get('/:zoneId', async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        zoneId: req.params.zoneId // only want it to return posts where zoneid matches zoneid passed in
      }
    });
    console.log(posts);
       // Convert Sequelize model instances to plain JavaScript objects
       const plainPosts = posts.map(post => post.toJSON());
    
       // three pieces that go into our render: zone partial, layout, and data object
       res.render(`zone${req.params.zoneId}`, { 
         layout: 'main',
         posts: plainPosts // Pass the plain JavaScript objects to the template
       });
   

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
