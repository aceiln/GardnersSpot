const { ForumPost } = require('../models');
const sampleData = require('./userBlogData.json');

async function seedBlogPosts() {
  try {
      // Example data for blog posts
      const blogPostsData = [
        { title: 'First Post', content: 'Content for the first post.', author: 'John Doe' },
        { title: 'Second Post', content: 'Content for the second post.', author: 'Jane Smith' },
        // Add more blog posts as needed
      ];

    // Use the bulkCreate method to insert the data into the database
    const createdBlogPosts = await BlogPost.bulkCreate(blogPostsData);

    console.log('Blog posts seeded successfully:', createdBlogPosts.length);
  } catch (error) {
    console.error('Error seeding blog posts:', error);
  }
}

// Call the seedBlogPosts function to initiate the seeding
seedBlogPosts();