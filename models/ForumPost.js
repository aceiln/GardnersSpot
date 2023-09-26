// Import Sequelize and define the model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect'); 
const Zone = require('./Zone'); 

// Define the ForumPost model
class ForumPost extends Model {}

// Initialize the ForumPost model with the columns
ForumPost.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add more columns as needed
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: 'ForumPost', // Specify the model name
  }
);


module.exports = ForumPost;







