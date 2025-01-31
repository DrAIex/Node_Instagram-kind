// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // другие поля, если они вам нужны
});

module.exports = User;
