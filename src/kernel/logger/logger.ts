import { createLogger, transports, format } from 'winston';
import { dateFormats } from '../date-utils';

const { combine, timestamp, label, prettyPrint } = format;

export const createFileLogger = (service: string) =>
  createLogger({
    format: combine(
      label({ label: service }),
      timestamp({
        format: dateFormats.getDateFormatForLogger(),
      }),
      prettyPrint()
    ),
    transports: [new transports.Console()],
  });
