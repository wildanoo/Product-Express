const winston = require('winston');

let options = {
    file: {
        level: 'info',
        filename: `../../logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 8242880, // 8MB
        maxFiles: 5,
        colorize: false
    },
    console: {
        level : 'debug',
        handleExceptions : true,
        json : false,
        colorize : true
    }
};

let logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false
});

logger.stream = {
    write : (message, encoding) => {
        logger.info(message)
    }
};

module.exports = logger;
