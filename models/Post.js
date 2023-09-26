const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Post extends Model {} 

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Post', 
  }
);


module.exports = Post;






