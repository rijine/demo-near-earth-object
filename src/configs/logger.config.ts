export class LoggerConfig {
  public static config = {
    log: {
      debug: {
        file: {
          name: 'debug-file',
          level: 'debug',
          filename: 'server/logs/debug.log',
          handleExceptions: true,
          json: true,
          maxsize: 5242880,
          maxFiles: 100,
          colorize: true
        },
        console: {
          name: 'debug-console',
          level: 'debug',
          handleExceptions: true,
          json: false,
          colorize: true
        }
      },
      info: {
        file: {
          name: 'info-file',
          level: 'info',
          filename: 'server/logs/info.log',
          handleExceptions: true,
          json: true,
          maxsize: 5242880,
          maxFiles: 100,
          colorize: true
        },
        console: {
          name: 'info-console',
          level: 'info',
          handleExceptions: true,
          json: false,
          colorize: true
        }
      }
    }
  };
  public static getLoggerConfig(production: boolean): any {
    return production ? LoggerConfig.config.log.info : LoggerConfig.config.log.debug;
  }
}
