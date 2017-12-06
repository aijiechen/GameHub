const router = require('express').Router();
const models = require('../models');
const Games = models.Games;


router.post('/', (req, res) => {
  Games.create({
    title: req.body.title
  });


});

module.exports = router;