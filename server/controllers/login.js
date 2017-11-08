const passport = require('../middlewares/authentication');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('login');
});

router.post('/', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/login',
  })(req, res);
});

module.exports = router;
