const router = require('express').Router();
const models = require('../models');
const Games = models.Games;


router.get('/', (req, res) => {
  Games.findAll()
  .then(game => {
  	res.json(game)
  })

});

module.exports = router;