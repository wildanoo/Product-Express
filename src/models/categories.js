'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {
    timestamp: true,
    underscored: true
  });
  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};
