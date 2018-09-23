'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_category = sequelize.define('product_category', {
    product_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    timestamp: true,
    underscored: true
  });
  product_category.associate = function(models) {
    
  };
  return product_category;
};
