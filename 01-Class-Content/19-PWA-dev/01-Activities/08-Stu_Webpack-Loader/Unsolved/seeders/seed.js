const { connect, connection } = require('mongoose');
const db = require('../models');

connect('mongodb://localhost/webpackplugin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;

const imageSeed = [
  {
    description: 'Moving',
    image: '/assets/images/1.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Empty',
    image: '/assets/images/2.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Influencer',
    image: '/assets/images/3.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Developer Activity',
    image: '/assets/images/4.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Outer Space',
    image: '/assets/images/5.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Online',
    image: '/assets/images/6.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Spreadsheets',
    image: '/assets/images/7.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'High Five',
    image: '/assets/images/8.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Collecting',
    image: '/assets/images/9.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Bibliophile',
    image: '/assets/images/10.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Romantic Getaway',
    image: '/assets/images/11.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Analyze',
    image: '/assets/images/12.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Gaming',
    image: '/assets/images/13.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'In Sync',
    image: '/assets/images/14.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Online Payments',
    image: '/assets/images/15.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
  {
    description: 'Explore',
    image: '/assets/images/16.svg',
    rating: 0,
    date: new Date(Date.now()),
  },
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
