const { Gallery } = require('../models');

const gallerydata = [
  {
    name: '',
    opening_hour: '',
    closing_hour: '',
  }
]

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
