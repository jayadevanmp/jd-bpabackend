import express from 'express';
import { createFileLogger } from '../../kernel';
import { kpiService } from '../../services/kpi';
import { kpiDetailsRequestValidator } from '../../validators/kpi';

export const kpiRoutes = express.Router();

const logger = createFileLogger('[kpi.routes.ts]');

/**
 * @openapi
 * tags:
 *   name: KPI
 *   description: API for managing kpi information for batches and sites
 * components:
 *   schemas:
 *     KPIDetails:
 *       type: object
 *       properties:
 *         error:
 *           type: object
 *           description: Error object with description
 *         data:
 *           oneOf:
 *             - $ref: '#/components/schemas/BatchBPIDetailsData'
 *             - $ref: '#/components/schemas/BatchQualityDetailsData'
 *             - $ref: '#/components/schemas/BatchCycleTimeDetailsData'
 *     BatchBPIDetailsData:
 *        type: object
 *        example:
 *          batchId: '17'
 *          name: ISBPM.Batch.17
 *          bpiIndex: 74.91
 *          quality:
 *            average: 74.91
 *            golden: 85.85
 *          cycleTime:
 *            average: 181
 *            golden: 202
 *        properties:
 *          batchId:
 *            type: string
 *            description: Unique Id for the current batch
 *          name:
 *            type: string
 *            description: Name of the batch
 *          bpiIndex:
 *            type: number
 *            description: BPI value
 *          quality:
 *            type: object
 *            description: Quality information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Quality KPI value for current batch
 *              golden:
 *                type: number
 *                description: average Quality KPI value for golden batch
 *          cycleTime:
 *            type: object
 *            description: Cycle Time information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Cycle Time KPI value for current batch
 *              golden:
 *                type: number
 *                description: average Cycle Time KPI value for golden batch
 *     BatchQualityDetailsData:
 *        type: object
 *        example:
 *          batchId: '17'
 *          name: ISBPM.Batch.17
 *          quality:
 *            average: 74.91
 *            golden: 85.85
 *          qualityParameters:
 *            - name: QP1
 *              processParameter: PenicillinYield
 *              average: 69.24
 *              golden: 74.28
 *            - name: QP2
 *              processParameter: Viscosity
 *              average: 69.24
 *              golden: 74.28
 *        properties:
 *          batchId:
 *            type: string
 *            description: Unique Id for the current batch
 *          name:
 *            type: string
 *            description: Name of the batch
 *          quality:
 *            type: object
 *            description: Quality information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Quality KPI value for current batch
 *              golden:
 *                type: number
 *                description: average Quality KPI value for golden batch
 *          qualityParameters:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: Name of the quality parameter variable
 *                processParamter:
 *                  type: string
 *                  description: The Actual Process paramter under consideration
 *                average:
 *                  type: number
 *                  description: average Quality Parameter value for current batch
 *                golden:
 *                  type: number
 *                  description: average Quality Parameter value for golden batch
 *     BatchCycleTimeDetailsData:
 *        type: object
 *        properties:
 *          batchId:
 *            type: string
 *            description: Unique Id for the current batch
 *          name:
 *            type: string
 *            description: Name of the batch
 *          cycleTime:
 *            type: number
 *            description: Cycle Time value for the current batch
 *          processAlarams:
 *            type: object
 *            description: Process Alarms information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Process Alarms value for current batch
 *              golden:
 *                type: number
 *                description: average Process Alarms value for golden batch
 *          promptResponseTimeAverage:
 *            type: object
 *            description: Process Response Average Time information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Process Response Average Time value for current batch
 *              golden:
 *                type: number
 *                description: average Process Response Average Time value for golden batch
 *          abnormalStateChange:
 *            type: object
 *            description: Abnormal State Change information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Abnormal State Change value for current batch
 *              golden:
 *                type: number
 *                description: average Abnormal State Change value for golden batch
 *          resourceAvailabilityDelay:
 *            type: object
 *            description: Resource Availability Delay information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Resource Availability Delay value for current batch
 *              golden:
 *                type: number
 *                description: average Resource Availability Delay value for golden batch
 *          timeSpentInHold:
 *            type: object
 *            description: Time Spent in hold information for current and golden batch
 *            properties:
 *              average:
 *                type: number
 *                description: average Time Spent in hold value for current batch
 *              golden:
 *                type: number
 *                description: average Time Spent in hold value for golden batch
 */
/**
 * @openapi
 * /api/v1/kpi:
 *   get:
 *     description: Get KPI information
 *     produces:
 *       - application/json
 *     tags: [KPI]
 *     parameters:
 *       - in: query
 *         name: entity
 *         schema:
 *           type: string
 *         required: true
 *         description: Entity type is either batch or site
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Type of kpi. Valid values are bpi,quality and cycleTime
 *       - in: query
 *         name: batchId
 *         schema:
 *           type: string
 *         required: false
 *         description: Batch Id to be provided if selected entity type is batch
 *       - in: query
 *         name: siteId
 *         schema:
 *           type: string
 *         required: false
 *         description: Site Id to be provided if selected entity type is site
 *     responses:
 *       200:
 *         description: KPI Details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KPIDetails'
 *       5xx:
 *         description: KPI Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       4xx:
 *         description: KPI Request Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
kpiRoutes.get(
    '/kpi',
    kpiDetailsRequestValidator,
    async (req, res) => {
      try {
        const { kpiDetailsQueryParams = {} } = res.locals;
        logger.info(
          `[Get KPI Details]:: query params::${JSON.stringify(
            kpiDetailsQueryParams
          )}`
        );
        const resp = await kpiService.getKPIDetails(
          kpiDetailsQueryParams
        );
        logger.info(`[Get KPI Details]::success::${JSON.stringify(resp)}`);
        res.json(resp).status(200);
      } catch (err) {
        logger.error(`[Get KPI Details]::error::${err}`);
        res.json({ err: 'Something went wrong' }).status(500);
      }
    }
  );
