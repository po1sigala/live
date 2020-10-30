const router = require('express').Router();
const sequelize = require('../config/connection');
const { Gallery, Painting, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', (req, res) => {
  Gallery.findAll({})
  .then(dbGalleryData => {
    const galleries = dbGalleryData.map(gallery => gallery.get({ plain: true }));
    res.render('homepage', {
      galleries
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

module.exports = router;
