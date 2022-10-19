const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Jay123',
    email: 'jayemail@burner.com',
    password: 'password123'
  },
  {
    username: 'jwillguy',
    email: 'test@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;