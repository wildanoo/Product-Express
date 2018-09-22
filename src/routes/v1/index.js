const express = require('express');
const users = require('./users');
const v1 = express.Router();

v1.use('/users', users);

module.exports = v1;
