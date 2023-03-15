import { BatchBPIDetailsDTO, BatchQualityDetailsDTO, BatchCycleTimeDetailsDTO } from '../../dtos/batches';
import { KPIDetailRequestDTO } from '../../dtos/kpi';
import { createFileLogger } from '../../kernel';
import { KPI_ENTITY_TYPES } from '../../kernel/constants/kpi';
import { batchesService } from '../batches';

const logger = createFileLogger('[kpi.service.ts]');

const { SITE, BATCH } = KPI_ENTITY_TYPES;

export const kpiService = {
    async getKPIDetails(query: KPIDetailRequestDTO) {
        logger.info(`[Get KPI Details]:: query::${JSON.stringify(query)}`);
        let resp: BatchBPIDetailsDTO | BatchQualityDetailsDTO | BatchCycleTimeDetailsDTO;
        try {
          const { entity, batchId, type } = query;
          switch (entity) {
            case SITE:
            case BATCH:
                resp = await batchesService.getBatchKPIDetails(batchId, type);
                break;
            default:
              throw new Error(`Invalid KPI Entity Type::${entity}`);
          }
          logger.info(`[Get KPI Details]::response::${JSON.stringify(resp)}`);
          return resp;
        } catch (err) {
          logger.error(`[Get KPI Details]::error::${err}`);
          throw err;
        }
      },
};
