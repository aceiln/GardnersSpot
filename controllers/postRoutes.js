const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// Create a new post
router.post('/create', async (req, res) => {
    try {
      const { title, content, author, zoneId } = req.body;
      // Check if zoneId is provided
      if (!zoneId) {
        return res.status(400).json({ message: 'Zone ID is required for creating a post.' });
      }
       // Implementation for creating a new post

      const post = await Post.create({ title, content, author, zoneId });

      console.log('New post created:', post.toJSON()); // Log the created post
// If the Post class defines a `toJSON()` method, use it
const postObject = post.toJSON();

res.status(201).json(postObject);

      // res.status(201).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  // Delete a post by ID
router.delete('/post/delete/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    await Post.destroy({ where: { id: postId } });

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// // Update a post by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const postId = req.params.id;

//     const updatedPost = await Post.update(
//       { title, content },
//       { where: { id: postId } }
//     );

//     res.status(200).json(updatedPost);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

module.exports = router;
