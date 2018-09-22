'use strict';
const date = new Date();
const sampleData = [
  { product_id: 1, category_id: 1, created_at: date, updated_at: date},
  { product_id: 1, category_id: 3, created_at: date, updated_at: date},
]

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('product_categories', sampleData, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('product_categories', null, {});
  }
};
