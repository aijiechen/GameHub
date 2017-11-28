'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Games = sequelize.define('Games', {
    game: DataTypes.STRING,
    highScore: DataTypes.INTEGER,
    user: DataTypes.STRING
  }, {
    getterMethods: {
      highScore() {
        return `${this.highScore} ${this.user}`;
      }
    }
  });

  /*Games.beforeCreate((game) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPassword) => {
      user.password = hashedPassword;
    })
  );*/
  return Games;
};