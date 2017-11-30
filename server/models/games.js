'use strict';


module.exports = (sequelize, DataTypes) => {
  var Games = sequelize.define('Games', {
    title: DataTypes.STRING
  });
  return Games;
};
