const router = require('express').Router();

router.use('/api/login', require('./login'));
router.use('/api/signup', require('./signup'));
router.use('/api/profile', require('./profile'));
router.use('/api', require('./home'));

module.exports = router;
