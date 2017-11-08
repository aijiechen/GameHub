'use strict';

const bcrypt = require('bcrypt-nodejs');



module.exports = () => {

  
// retrieve(req, res) {
//   return User
//     .findById(req.params.userID, {
//       include:[{
//         model: userProfiles,
//         as: 'userProfiles',
//       }],
//     })
//     .then (user => {
//     if (!user) {
//       return res.status(404).send({
//         message: 'User Not Found',
//       });
//     }
//     return res.status(200).send(user);
//   })
//   .catch(error => res.status(400).send(error));
// },

  var userProfiles = ('userProfle', {
    firstName: 'FIRST NAME',
    lastName: 'LAST NAME',
    email: 'email@email.com',
    password: 'bassword'
  });
  return userProfiles;
};
