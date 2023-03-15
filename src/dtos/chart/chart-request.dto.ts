import { Transform } from 'class-transformer';
import { IsOptional, Validate } from 'class-validator';
import { ChartEntityTypeValidator } from '../../validators/custom-class-validators/chart-entity-type.validator';
import { ChartTypeValidator } from '../../validators/custom-class-validators/chart-type.validator';

export class ChartRequestDTO {
  @Validate(ChartEntityTypeValidator)
  public entity: string;

  @Validate(ChartTypeValidator)
  public type: string;

  @IsOptional()
  public batchId: string;

  @IsOptional()
  @Transform((obj) => new Date(obj.value), { toClassOnly: true })
  public startDate: Date;

  @IsOptional()
  @Transform((obj) => new Date(obj.value), { toClassOnly: true })
  public endDate: Date;
}
