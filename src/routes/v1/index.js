const express = require('express');
const users = require('./users');
const product = require('./products');

const v1 = express.Router();

v1.use('/users', users);
v1.use('/products',product);

module.exports = v1;
