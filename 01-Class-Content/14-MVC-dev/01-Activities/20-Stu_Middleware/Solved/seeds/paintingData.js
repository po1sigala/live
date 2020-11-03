const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Blossoming Apricot',
    artist: 'LedyX',
    date: new Date('March 30, 1988').toJSON(),
    filename: '01-blossoming-apricot.jpg',
  },
  {
    title: 'Cosmos Flowers',
    artist: 'WStudio',
    date: new Date('May 05, 2002').toJSON(),
    filename: '02-cosmos-flowers.jpg',
  },
  {
    title: 'Sand + Sea = Summer',
    artist: 'S_Photo',
    date: new Date('June 10, 2014').toJSON(),
    filename: '03-sand-sea-summer.jpg',
  },
  {
    title: 'Beach Chairs',
    artist: 'icemanphotos',
    date: new Date('July 4, 2020').toJSON(),
    filename: '04-beach-chairs.jpg',
  },
  {
    title: 'Beach Sunrise',
    artist: 'VRstudio',
    date: new Date('August 14, 1990').toJSON(),
    filename: '05-beach-sunrise.jpg',
  },
  {
    title: 'Fall Colors',
    artist: 'DrivingJack',
    date: new Date('October 15, 2018').toJSON(),
    filename: '06-fall-colors.jpg',
  },
  {
    title: 'Autumn Mountains',
    artist: 'Vitalii_Mamchuk',
    date: new Date('November 3, 1995').toJSON(),
    filename: '07-autumn-mountains.jpg',
  },
  {
    title: 'Frozen River',
    artist: 'Vlad Sokolovsky',
    date: new Date('December 24, 2001').toJSON(),
    filename: '08-frozen-river.jpg',
  },
  {
    title: 'Winter Home',
    artist: 'Smit',
    date: new Date('January 20, 1988').toJSON(),
    filename: '09-winter-home.jpg',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
