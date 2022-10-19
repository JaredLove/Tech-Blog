const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    post_content:'MVC allows developers to maintain a true sepraration of concerns, devising their code between the Model layer fpr data, the View layer for design, and the controller layer for a application logic.',
    user_id: 1
  },
  {
    title: 'Authentication vs. Authorization',
    post_content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity whereas authorization means being allowed access to the system.',
    user_id: 1
  },
  {
    title: 'Object-Relational Mapping',
    post_content: 'I have really loved learning about ORMs. Its really simplified the way I create queries in SQL',
    user_id: 1
  }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
