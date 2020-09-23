const router = require('express').Router();
const { License } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const licenseData = await License.findAll();
    res.status(200).json(licenseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const licenseData = await License.findByPk(req.params.id);

    if (!licenseData) {
      res.status(404).json({ message: 'No license found with that id!' });
      return;
    }

    res.status(200).json(licenseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
