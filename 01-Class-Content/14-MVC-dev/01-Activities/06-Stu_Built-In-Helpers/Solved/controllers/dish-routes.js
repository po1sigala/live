const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('all', dishList);
  });


router.get('/:num', (req, res) => {
    return res.render('dish', dishList.dishes[req.params.num - 1]);
})
  

module.exports = router