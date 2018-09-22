const app = require('./app.js');
const config = require('config');
const server = app.listen(config.port);
const winston = require('../config/winston');

process.on('unhandledRejection', (reason, p) => {
    return winston.error('Unhandled Rejection at: Promise ', p, reason)    
});

server.on('listening', () => {
    return winston.log(
        'info',
        'Product Express API server started on http://%s:%d',
        config.host,
        config.port
    )
})
