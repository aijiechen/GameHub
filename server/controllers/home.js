const router = require('express').Router();
const Users = require('../models').Users;


router.get('/', (req, res) => {
	res.json(req.user)
	// res.json({test: "ok"})

});



module.exports = router;
