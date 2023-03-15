import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { KPIDetailRequestDTO } from '../../dtos/kpi';
import { createFileLogger } from '../../kernel';
import { KPI_ENTITY_TYPES } from '../../kernel/constants/kpi';

const logger = createFileLogger('[batch-detail-request.validator.ts]');

export const kpiDetailsRequestValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const kpiDetailsRequestDTO = plainToInstance(
    KPIDetailRequestDTO,
    req.query
  );
  logger.info(
    `[KPI Details Request Validator]:: batchDetailsRequestDTO::${JSON.stringify(
      kpiDetailsRequestDTO
    )}`
  );
  const errors = await validate(KPIDetailRequestDTO);
  // check if any required field is missing
  // check if entity type is site, site id needs to be provided
  // check if entity type is batch, batch id needs to be provided
  if (errors.length ||
    (kpiDetailsRequestDTO.entity === KPI_ENTITY_TYPES.SITE && !kpiDetailsRequestDTO.siteId) ||
     (kpiDetailsRequestDTO.entity === KPI_ENTITY_TYPES.BATCH && !kpiDetailsRequestDTO.batchId)) {
    logger.error(
      `[KPI Details Request Validator]:: error::${JSON.stringify(errors)}`
    );
    res.json({ err: 'Bad Request' }).status(400);
  } else {
    res.locals.kpiDetailsQueryParams = kpiDetailsRequestDTO;
    next();
  }
};
