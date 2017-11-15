const router = require('express').Router();
const models = require('../models');
const Friends = models.Friends;

router.get('/', (req, res) => {
  // res.json(Friends.findAll());

  Friends.findAll().then((friends) => {
  	res.json(friends);
  })

  // res.render('home');
});

module.exports = router;
