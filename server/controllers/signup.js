const router = require('express').Router();
const models = require('../models');
const Users = models.Users;
// const Friends = models.Friends;

// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
//   console.log(Friends.findAll());
//   return;

//npm install stringLength
const stringLength = require('string-length');

//npm install validator
var valid = require('validator');

//Using npm dialog
// var dialog = require('dialog');

function passwordCheck(password){
//Secure password is >8 digits has lower, upper and number
  if(stringLength(password) < 8){
    return false;
  }
  if(valid.isLowercase(password) || valid.isUppercase(password))
  {
    return false;
  }
  if(valid.isAlphanumeric(password)){
    return true;
  }
}

router.get('/', (req, res) => {
  res.render('signup')

});

router.post('/', (req, res) => {
  Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    req.login(user, () =>
      res.json(user)
    );
  }).catch(() => {
    res.json({message: "Error",
      status: 0})
  });

});

module.exports = router;