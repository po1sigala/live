const router = require('express').Router();
const User = require('../../models/User.js');
const { json } = require('sequelize/types');


// GET /api/users/1
router.get('/:id', async(req, res) => {
    try {
        const userData = await User.findOne(req.params.id);
        res.status(200).json(userData);
    } catch(err) {
        res.status(404).json(err)
    }

});


// POST /api/users
router.post('/', async(req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData)
    } catch(err) {
        res.status(400).json(err)
    }

});

// PUT /api/users/1
router.put('/:id', async(req, res) => {
    try {
        const userData = await User.update(req.body, { where: { id: req.params.id} });
        res.status(200).json(userData)
    } catch(err) {
        res.status(404).json(err)
    }
    
});


module.exports = router;
