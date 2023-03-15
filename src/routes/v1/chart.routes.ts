import express from 'express';
import { createFileLogger } from '../../kernel';
import { chartService } from '../../services/chart';
import { chartRequestValidator } from '../../validators/chart';

export const chartRoutes = express.Router();

const logger = createFileLogger('[chart.routes.ts]');
/**
 * @openapi
 * tags:
 *   name: Chart
 *   description: API for managing charts. Please refer [HighChart Definitions](https://www.highcharts.com/docs/chart-and-series-types/chart-types) for chart definitions and types. These will be sent in the data property of response
 * */
/**
 * @openapi
 * /api/v1/chart:
 *   get:
 *     description: Get Chart
 *     produces:
 *       - application/json
 *     tags: [Chart]
 *     parameters:
 *       - in: query
 *         name: entity
 *         schema:
 *           type: string
 *         required: true
 *         description: Supported entity type is batchDetails
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Type of chart. Valid values are spyder,histogram and trends
 *       - in: query
 *         name: batchId
 *         schema:
 *           type: string
 *         required: false
 *         description: Batch Id to be provided if selected entity type is batchDetails
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *         required: false
 *         description: ISO Formatted date string for start date selection
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *         required: false
 *         description: ISO Formatted date string for end date selection
 *     responses:
 *       5xx:
 *         description: Chart Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       4xx:
 *         description: Chart Request Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
chartRoutes.get(
    '/chart',
    chartRequestValidator,
    async (req, res) => {
      try {
        const { chartQueryParams = {} } = res.locals;
        logger.info(
          `[Get Chart]:: query params::${JSON.stringify(
            chartQueryParams
          )}`
        );
        const resp = await chartService.getChart(
          chartQueryParams
        );
        logger.info(
          `[Get Chart]::success::${JSON.stringify(resp)}`
        );
        res.json(resp).status(200);
      } catch (err) {
        logger.error(`[Get Chart]::error::${err}`);
        res.json({ err: 'Something went wrong' }).status(500);
      }
    }
  );
