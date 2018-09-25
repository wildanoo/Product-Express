const express = require('express');
const usersController = require('../../controllers/users')
const route = express.Router();

route.post('/login',usersController.login);
route.post('/register', usersController.register);


module.exports = route;
