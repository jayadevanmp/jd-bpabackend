import express from 'express';
import { batchesRoutes } from './batches.routes';
import { chartRoutes } from './chart.routes';
import { kpiRoutes } from './kpi.routes';

export const v1Routes = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: object
 *           description: Error object with description
 *         data:
 *           type: object
 *           description: Data object
 *       example:
 *         error:
 *            message: Error performing operation
 *         data: null
 */

v1Routes.use(batchesRoutes);
v1Routes.use(kpiRoutes);
v1Routes.use(chartRoutes);
