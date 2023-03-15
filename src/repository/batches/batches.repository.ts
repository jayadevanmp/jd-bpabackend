import { createFileLogger } from '../../kernel';
import { batchDetailsMockProvider, spcProvider } from '../../kernel/providers';

const logger = createFileLogger('[batches.repository.ts]');

export const batchesRepository = {
  getBatchDetails(id: string) {
    logger.info(`[Get Batch Details]::batchId::${id}`);
    return batchDetailsMockProvider.getBatchDetails(id);
  },
  getBatchBPIDetails(id: number) {
    logger.info(`[Get Batch BPI Details]::batchId::${id}`);
    return batchDetailsMockProvider.getBatchBPI(id.toString());
  },
  getBatchQualityDetails(id: number) {
    logger.info(`[Get Batch Quality Details]::batchId::${id}`);
    return batchDetailsMockProvider.getBatchQuality(id.toString());
  },
  getBatchCycleTimeDetails(id: number) {
    logger.info(`[Get Batch Cycle Time Details]::batchId::${id}`);
    return batchDetailsMockProvider.getBatchCycleTime(id.toString());
  },
  getSpyderChart(data: unknown) {
    logger.info('[Get Spyder Chart]');
    return spcProvider.getSpyderChart(data);
  },
  getTrendsChart(data: unknown) {
    logger.info('[Get Trends Chart]');
    return spcProvider.getTrendsChart(data);
  },
  getHistogramChart(data: unknown) {
    logger.info('[Get Histogram Chart]');
    return spcProvider.getHistogramChart(data);
  },
};
