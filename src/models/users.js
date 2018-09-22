'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    timestamp: true,
    underscored: true
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
