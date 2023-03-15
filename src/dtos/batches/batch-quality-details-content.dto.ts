import { Expose, Type } from 'class-transformer';
import { KPIComparisonDTO } from './kpi-comparison.dto';
import { QualityParameterDTO } from './quality-parameter.dto';

export class BatchQualityDetailsContentDTO {
  @Expose()
  public name: string;

  @Expose({ name: 'batch_id' })
  public batchId: string;

  @Expose()
  public quality: KPIComparisonDTO;

  @Expose({ name: 'quality_parameters' })
  @Type(() => QualityParameterDTO)
  public qualityParameters: QualityParameterDTO[];
}
