const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Printemps',
    starting_date: new Date('March 20, 2021 07:00:00').toJSON(),
    ending_date: new Date('June 21, 2021 17:00:00').toJSON(),
  },
  {
    name: 'Sommer',
    starting_date: new Date('June 22, 2021 09:00:00').toJSON(),
    ending_date: new Date('September 22, 2021 22:00:00').toJSON(),
  },
  {
    name: 'Herfst',
    starting_date: new Date('September 23, 2021 08:30:00').toJSON(),
    ending_date: new Date('December 21, 2021 20:30:00').toJSON(),
  },
  {
    name: 'Invierno',
    starting_date: new Date('December 22, 2020 11:00:00').toJSON(),
    ending_date: new Date('March 19, 2021 19:00:00').toJSON(),
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
