
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const config = require('config');

const winston = require('../config/winston');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('combined',{stream: winston.stream}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    winston.error(
        `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
            req.method
          } - ${req.ip}`
    );

    res.status(err.status || 500);
    res.render('error');
});

app.use('/api/v1', routes.v1);

module.exports = app;
