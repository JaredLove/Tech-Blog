const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Awesome',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Cool',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'True',
    user_id: 2,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
