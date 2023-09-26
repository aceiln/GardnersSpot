const { Post } = require('../models');
const userBlogData = require('./userBlogData.json');

const seedPosts = async () => {
  try {
    for (const postData of userBlogData) {
      await Post.create({
        title: postData.title,
        content: postData.content,
        author: postData.author,
        zoneId: postData.zoneId,
      });
    }

    console.log('Blog posts seeded successfully.');
  } catch (error) {
    console.error('Error seeding blog posts:', error);
  }
};

module.exports = seedPosts;