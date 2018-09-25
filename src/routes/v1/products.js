'use strict';
const express = require('express')
const productController = require('../../controllers/products');
const usersController = require('../../controllers/users')

const route = express.Router();

route.get('/:id?', productController.getData);
route.post('/',usersController.checkAuth, productController.createData);
route.patch('/:id',usersController.checkAuth, productController.updateData);
route.delete('/:id', usersController.checkAuth, productController.deleteData);

module.exports = route;
