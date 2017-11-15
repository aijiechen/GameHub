const router = require('express').Router();


router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/profile', require('./profile'));
router.use('/userProfiles', require('./userProfiles'));
router.use('/home', require('./home'));

module.exports = router;
