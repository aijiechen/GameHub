const passport = require('../middlewares/authentication');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  passport.authenticate('local', function (err, account) {
    req.logIn(account, function() {
        res.status(err ? 500 : 200).send(err ? err : account);
    });
  })(req, res);
});

module.exports = router;
