import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { ChartRequestDTO } from '../../dtos/chart';
import { createFileLogger } from '../../kernel';

const logger = createFileLogger('[chart-request-validator.ts]');

export const chartRequestValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const chartRequestDTO = plainToInstance(ChartRequestDTO, req.query);
  logger.info(
    `[Chart Request Validator]:: chartRequestDTO::${JSON.stringify(
      chartRequestDTO
    )}`
  );
  const errors = await validate(chartRequestDTO);
  if (errors.length) {
    logger.error(
      `[Chart Request Validator]:: error::${JSON.stringify(errors)}`
    );
    res.json({ err: 'Bad Request' }).status(400);
  } else {
    res.locals.chartQueryParams = chartRequestDTO;
    next();
  }
};
