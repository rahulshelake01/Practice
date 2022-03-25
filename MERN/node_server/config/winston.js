const appRoot = require("app-root-path")
const winston = require("winston")
var Elasticsearch = require('winston-elasticsearch');

var _ = require('lodash')

var options = {
    file: {
        level: "info",
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        maxsize: 500,
        maxFiles: 5,
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: true
    }
}

var logger = new winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    format: winston.format.combine(
        winston.format.printf((info) => {
            let { timestamp, level, message, ...args } = info;
            let params = Object.keys(args)
            console.log(params)
            let body = _.pick(args, ...params)
            body['message'] = message
            var time = new Date().toLocaleString("id-ID", {timeZone: 'Asia/Jakarta'})
            return JSON.stringify({time, level, body})
          })
    ),
    exitOnError: false,
})

logger.stream = {
    write: function(message, encoding) {
        logger.info(message)
    }
}

module.exports = logger