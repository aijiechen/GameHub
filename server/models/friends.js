'friend strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Friends = sequelize.define('Friends', {
    friendId: DataTypes.INTEGER

  });
  Friends.associate = (models) => {
    models.Friends.belongsTo(models.Users);
    Friends.belongsTo(models.Users, {foreignKey: 'friendId', targetKey: 'id'});

  }

  return Friends;
};




