'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {
    timestamp: true,
    underscored: true
  });
  categories.associate = function(models) {
    categories.belongsToMany(models.products, {
      through: 'product_category',
      foreignKey: 'category_id',
      as: 'products'
    })
  };
  return categories;
};
