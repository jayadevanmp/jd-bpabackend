import { spcAPIClient } from '../api-clients';
import { createFileLogger } from '../logger';

const logger = createFileLogger('[spc.provider.ts]');

export const spcProvider = {
  getSpyderChart(data: unknown) {
    logger.info('[Get Spyder Chart]');
    return spcAPIClient.post('/', data);
  },
  getTrendsChart(data: unknown) {
    logger.info('[Get Trends Chart]');
    return spcAPIClient.post('/', data);
  },
  getHistogramChart(data: unknown) {
    logger.info('[Get Histogram Chart]');
    return spcAPIClient.post('/', data);
  },
};
