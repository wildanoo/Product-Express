'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
  }, {
    timestamp: true,
    underscored: true
  });
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};
