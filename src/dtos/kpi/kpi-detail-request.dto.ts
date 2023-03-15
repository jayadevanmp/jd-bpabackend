import { IsOptional, Validate } from 'class-validator';
import { KPIEntityTypeValidator } from '../../validators/custom-class-validators/kpi-entity-type.validator';
import { KPITypeValidator } from '../../validators/custom-class-validators/kpi-type.validator';

export class KPIDetailRequestDTO {
  @Validate(KPIEntityTypeValidator)
  public entity: string;

  @Validate(KPITypeValidator)
  public type: string;

  @IsOptional()
  public batchId: string;

  @IsOptional()
  public siteId: string;
}
