import express from 'express';
import { createFileLogger } from '../../kernel';
import { batchesService } from '../../services';

export const batchesRoutes = express.Router();

const logger = createFileLogger('[batches.routes.ts]');

/**
 * @openapi
 * tags:
 *   name: Batches
 *   description: API for managing batches
 * components:
 *   schemas:
 *     BatchDetails:
 *       type: object
 *       properties:
 *         error:
 *           type: object
 *           description: Error object with description
 *         data:
 *           $ref: '#/components/schemas/BatchDetailsData'
 *       example:
 *          error: null
 *          data:
 *            batchId: '17'
 *            name: ISBPM.Batch.17
 *            description: ''
 *            tags:
 *              - aeration_rate
 *            enterpriseName: Enterprise1
 *            productCode: ''
 *            recipeName: BPA_PENICILLIN.BPC
 *            siteName: Site1
 *            productDesc: ''
 *            areaName: AREA1
 *            recipeFormulation: ''
 *            batchStatus: COMPLETE
 *            processCellName: PROCESS_CELL1
 *            unitName: UNIT_1
 *            startTimeBatchList: 2022-01-23T08:00:00.000Z
 *            endTimeBatchList: 2022-01-31T04:00:00.000Z
 *            gbName: ''
 *            isGB: false
 *     BatchDetailsData:
 *        type: object
 *        properties:
 *          batchId:
 *            type: string
 *            description: Unique Id for the current batch
 *          name:
 *            type: string
 *            description: Name of the batch
 *          description:
 *            type: string
 *            description: Short description around the batch
 *          tags:
 *            type: array
 *            items:
 *              type: string
 *          enterpriseName:
 *            type: string
 *            description: Name of the Enterprise to which the Batch belongs
 *          productCode:
 *            type: string
 *            description: Product Code to which the Batch belongs
 *          recipeName:
 *            type: string
 *            description: Recipe Name to which the Batch belongs
 *          siteName:
 *            type: string
 *            description: Site Name to which the Batch belongs
 *          productDesc:
 *            type: string
 *            description: Product Description to which the Batch belongs
 *          areaName:
 *            type: string
 *            description: Area Name to which the Batch belongs
 *          recipeFormulation:
 *            type: string
 *            description: Recipe Formulation to which the Batch belongs
 *          batchStatus:
 *            type: string
 *            description: Current Batch Status
 *          processCellName:
 *            type: string
 *            description: Process cell name for the current batch
 *          unitName:
 *            type: string
 *            description: Unit name for the current batch
 *          startTimeBatchList:
 *            type: string
 *            description: Batch start datetime value in ISO string format
 *          endTimeBatchList:
 *            type: string
 *            description: Batch end datetime value in ISO string format
 *          gbName:
 *            type: string
 *            description: Custom Name for this batch. Will be set if this is the golden batch
 *          isGB:
 *            type: boolean
 *            description: Flag value to determine whether the current batch is golden batch
 */
/**
 * @openapi
 * /api/v1/batches/{batchId}:
 *   get:
 *     description: Get Batch Details By Id
 *     produces:
 *       - application/json
 *     tags: [Batches]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Batch Id
 *     responses:
 *       200:
 *         description: Batch Details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BatchDetails'
 *       5xx:
 *         description: Batch Details Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
batchesRoutes.get('/batches/:batchId', async (req, res) => {
  const { batchId } = req.params;
  logger.info(`[Get Batch Details]:: batchId::${batchId}`);
  try {
    const resp = await batchesService.getBatchDetails(batchId);
    logger.info(`[Get Batch Details]::success::${JSON.stringify(resp)}`);
    res.json(resp).status(200);
  } catch (err) {
    logger.error(`[Get Batch Details]::error::${err}`);
    res.json({ error: 'Error fetching batch details' }).status(500);
  }
});
