	const router = require('express').Router();
const Users = require('../models').Users;


router.get('/:id', (req, res) => {
	const id=req.params.id
	Users.findById(id) 
	.then(user => {
		res.json(user)})


});



module.exports = router;
