'use strict';
const express = require('express')
const productController = require('../../controllers/products');

const route = express.Router();

route.get('/:id?', productController.getData);
route.post('/', productController.createData);
route.patch('/:id', productController.updateData);
route.delete('/:id', productController.deleteData);

module.exports = route;
