const router = require('express').Router();
const models = require('../models');
const Users = models.Users;

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

  /*if(!req.body.firstName || !req.body.password 

    || !req.body.lastName || !req.body.email){
      // res.status("400");
      // res.send("Invalid details!");
      res.render('signup');
   }
  else if(!passwordCheck(req.body.password)){
    res.render('signup');
  }

  else {*/

      Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      req.login(user, () =>
        res.redirect('/profile')
      );
    }).catch(() => {
      res.render('signup');
    });



});

module.exports = router;
