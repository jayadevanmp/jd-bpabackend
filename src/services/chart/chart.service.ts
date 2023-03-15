import { ChartRequestDTO } from '../../dtos/chart';
import { createFileLogger } from '../../kernel';
import { CHART_ENTITY_TYPES } from '../../kernel/constants/chart';
import { batchesChartService } from '../batches/batches-chart.service';

const logger = createFileLogger('[chart.service.ts]');

const { BATCH_DETAILS } = CHART_ENTITY_TYPES;

export const chartService = {
    async getChart(query: ChartRequestDTO) {
        logger.info(`[Get Chart]:: query::${JSON.stringify(query)}`);
        const { entity } = query;
        let resp = null;
        try {
            switch (entity) {
                case BATCH_DETAILS:
                    resp = await batchesChartService.getBatchChart(query);
                    break;
                default:
                    throw new Error(`Invalid Chart Entity Type::${entity}`);
            }
            logger.info(
                `[Get Chart]::response::${JSON.stringify(resp)}`
              );
              return resp;
        } catch (err) {
            logger.error(`[Get Chart]::error::${err}`);
            throw err;
        }
    }
};
