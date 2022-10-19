const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------------- SEEDING ---------------');
  await seedUsers();
  console.log('-------------- SEEDING USERS ---------------');

  await seedPosts();
  console.log('-------------- SEEDING POSTS ---------------');

  await seedComments();
  console.log('-------------- SEEDING COMMENTS ---------------'),

  process.exit(0);
};

seedAll();