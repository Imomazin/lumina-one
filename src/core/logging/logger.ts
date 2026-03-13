type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogMessage {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

class Logger {
  private isDevelopment = import.meta.env.DEV;

  private formatMessage(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>
  ): LogMessage {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
    };
  }

  debug(message: string, context?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      const logMessage = this.formatMessage('debug', message, context);
      // eslint-disable-next-line no-console
      console.debug(`[${logMessage.timestamp}] DEBUG:`, logMessage.message, context || '');
    }
  }

  info(message: string, context?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      const logMessage = this.formatMessage('info', message, context);
      // eslint-disable-next-line no-console
      console.info(`[${logMessage.timestamp}] INFO:`, logMessage.message, context || '');
    }
  }

  warn(message: string, context?: Record<string, unknown>): void {
    const logMessage = this.formatMessage('warn', message, context);
    // eslint-disable-next-line no-console
    console.warn(`[${logMessage.timestamp}] WARN:`, logMessage.message, context || '');
  }

  error(message: string, error?: unknown, context?: Record<string, unknown>): void {
    const logMessage = this.formatMessage('error', message, context);
    // eslint-disable-next-line no-console
    console.error(`[${logMessage.timestamp}] ERROR:`, logMessage.message, error, context || '');

    // In production, you would send this to an error tracking service like Sentry
    // Example: Sentry.captureException(error, { extra: { message, ...context } });
  }
}

export const logger = new Logger();
