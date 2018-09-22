'use strict';
const date = new Date();
const dataSample = [
  { name: 'Men', created_at: date, updated_at: date},
  { name: 'Women', created_at: date, updated_at: date},
  { name: 'T-shirt', created_at: date, updated_at: date},
  { name: 'Jeans', created_at: date, updated_at: date},
  { name: 'Hat', created_at: date, updated_at: date},
  { name: 'Shoes', created_at: date, updated_at: date},
  { name: 'Sandals', created_at: date, updated_at: date},
  { name: 'Jacket', created_at: date, updated_at: date},
  { name: 'Sweater', created_at: date, updated_at: date},
  { name: 'Small', created_at: date, updated_at: date},
  { name: 'Medium', created_at: date, updated_at: date},
  { name: 'Large', created_at: date, updated_at: date}
]

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', dataSample, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
  }
};
