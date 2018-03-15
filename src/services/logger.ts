import { Logger, transports } from 'winston';
import { LoggerConfig } from './../configs/logger.config';

const LOG_LEVEL: string = process.env.LOG_LEVEL;

let transportsConf = [];

if (process.env.NODE_ENV === 'production') {
    transportsConf = [
        new transports.File(LoggerConfig.getLoggerConfig(true).file),
        new transports.Console(LoggerConfig.getLoggerConfig(true).console),
    ];
} else {
    transportsConf = [
        //new transports.File(LoggerConfig.getLoggerConfig(false).file),
        new transports.Console(LoggerConfig.getLoggerConfig(false).console),
    ];
}

export const Log = new Logger({transports: transportsConf, exitOnError: false});