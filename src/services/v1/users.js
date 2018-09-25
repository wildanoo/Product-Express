'use strict';
const bcrypt = require('bcrypt')
const {users} = require('../../models');

let user = {
    register : async (input) => {
        const pass = await bcrypt.hash(input.password, parseInt(process.env.SALT_ROUND));
        const createUser = users.create({ username: input.username, email: input.email,password : pass})

        return createUser;
    }
}

module.exports = user
