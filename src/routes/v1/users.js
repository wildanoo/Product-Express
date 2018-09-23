const express = require('express');
const route = express.Router();

route.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = route;
