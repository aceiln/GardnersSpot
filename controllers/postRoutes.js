const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// Create a new post
router.post('/create', async (req, res) => {
  try {
    const { title, content, author, zoneId } = req.body;

    const post = await Post.create({ title, content, author, zoneId });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update a post by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.id;

    const updatedPost = await Post.update(
      { title, content },
      { where: { id: postId } }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    await Post.destroy({ where: { id: postId } });

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
