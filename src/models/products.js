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
    products.belongsToMany(models.categories, {
      through: 'product_category',
      foreignKey: 'product_id',
      as: 'categories'
    })
  };
  return products;
};
