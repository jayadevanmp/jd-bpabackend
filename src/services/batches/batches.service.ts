import { plainToInstance } from 'class-transformer';
import { BatchBPIDetailsDTO, BatchCycleTimeDetailsDTO, BatchDetailsDTO, BatchQualityDetailsDTO } from '../../dtos/batches';
import { DataModel } from '../../dtos/data-model.dto';
import { createFileLogger } from '../../kernel';
import { KPI_TYPES } from '../../kernel/constants/kpi';
import { batchesRepository } from '../../repository';

const { BPI, CYCLE_TIME, QUALITY, RMD } = KPI_TYPES;

const logger = createFileLogger('[batches.service.ts]');

export const batchesService = {
  async getBatchKPIDetails(id: string, kpiType: string) {
    logger.info(`[Get Batch KPI Details]::batchId::${id}`);
    logger.info(`[Get Batch KPI Details]:: query::${kpiType}`);
    let resp: BatchBPIDetailsDTO | BatchQualityDetailsDTO | BatchCycleTimeDetailsDTO;
    try {
      switch (kpiType) {
        case BPI:
          resp = await this.getBatchBPIDetails(id);
          break;
        case QUALITY:
          resp = await this.getBatchQualityDetails(id);
          break;
        case CYCLE_TIME:
        case RMD:
          resp = await this.getBatchCycleTimeDetails(id);
          break;
        default:
          throw new Error('Invalid KPI Type');
      }
      logger.info(`[Get Batch KPI Details]::response::${JSON.stringify(resp)}`);
      return resp;
    } catch (err) {
      logger.error(`[Get Batch KPI Details]::error::${err}`);
      throw err;
    }
  },
  async getBatchDetails(id: string) {
    logger.info(`[Get Batch Details]::batchId::${id}`);
    try {
      const resp = await batchesRepository.getBatchDetails(id);
      logger.info(`[Get Batch Details]::plain response::${JSON.stringify(resp)}`);
      const response = plainToInstance(BatchDetailsDTO, new DataModel(resp, null), {
        excludeExtraneousValues: true,
        enableImplicitConversion: true
      });
      return response;
    } catch (err) {
      logger.error(`[Get Batch Details]::error::${err}`);
      throw err;
    }
  },
  async getBatchBPIDetails(id: string) {
    logger.info(`[Get Batch BPI Details]::batchId::${id}`);
    try {
      const resp = await batchesRepository.getBatchBPIDetails(+id);
      logger.info(`[Get Batch BPI Details]::plain response::${JSON.stringify(resp)}`);
      const response = plainToInstance(BatchBPIDetailsDTO, new DataModel(resp, null), {
        excludeExtraneousValues: true,
        enableImplicitConversion: true
      });
      return response;
    } catch (err) {
      logger.error(`[Get Batch BPI Details]::error::${err}`);
      throw err;
    }
  },
  async getBatchQualityDetails(id: string) {
    logger.info(`[Get Batch Quality Details]::batchId::${id}`);
    try {
      const resp = await batchesRepository.getBatchQualityDetails(+id);
      logger.info(`[Get Batch Quality Details]::plain response::${resp}`);
      const response = plainToInstance(BatchQualityDetailsDTO, new DataModel(resp, null), {
        excludeExtraneousValues: true,
        enableImplicitConversion: true
      });
      return response;
    } catch (err) {
      logger.error(`[Get Batch Quality Details]::error::${err}`);
      throw err;
    }
  },
  async getBatchCycleTimeDetails(id: string) {
    logger.info(`[Get Batch Cycle Time Details]::batchId::${id}`);
    try {
      const resp = await batchesRepository.getBatchCycleTimeDetails(+id);
      logger.info(`[Get Batch Cycle Time  Details]::plain response::${resp}`);
      const response = plainToInstance(BatchCycleTimeDetailsDTO, new DataModel(resp, null), {
        excludeExtraneousValues: true,
        enableImplicitConversion: true
      });
      return response;
    } catch (err) {
      logger.error(`[Get Batch Cycle Time Details]::error::${err}`);
      throw err;
    }
  }
};
