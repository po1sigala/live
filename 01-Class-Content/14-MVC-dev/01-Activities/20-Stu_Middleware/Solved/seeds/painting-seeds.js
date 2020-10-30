const { Painting } = require('../models');

const paintingdata = [
  {
    title: '',
    artist: '',
    completed_year: '',
    art_url: '',
  }
]

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
