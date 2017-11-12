const router = require('express').Router();
const Users = require('../models').Users;


router.get('/', (req, res) => {
	res.json(JSON.stringify(req.user))


});



module.exports = router;
