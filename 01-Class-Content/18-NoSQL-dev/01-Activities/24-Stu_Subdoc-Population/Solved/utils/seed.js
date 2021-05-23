const connection = require('../config/connection');
const { Post, Tags } = require('../models');
const { getRandomColor, getRandomPost } = require('./data');

console.time('seeding');
connection.once('open', async () => {
  await Post.deleteMany({});
  await Tags.deleteMany({});

  const tags = [];
  const posts = [];

  for (let i = 0; i < 20; i++) {
    const tagname = getRandomColor();
    const post = getRandomPost(50);

    tags.push({
      tagname,
      color: tagname,
    });

    posts.push({
      published: Math.random() < 0.5,
      text: post,
      tags: [],
    });
  }

  await Post.collection.insertMany(posts);
  await Tags.collection.insertMany(tags);
  console.table(tags);
  console.table(posts, ['published', 'tags', '_id']);
  console.timeEnd('seeding');
  process.exit(0);
});
