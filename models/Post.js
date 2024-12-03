// models/Post.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  }
  // другие поля, если они вам нужны
});

module.exports = Post;