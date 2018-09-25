'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pass = await bcrypt.hash(process.env.ADMIN_PASS, parseInt(process.env.SALT_ROUND));

      return queryInterface.bulkInsert('users', [{
        username: 'admin',
        password: pass,
        email: 'admin@admin.com',
        is_admin: 1,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
