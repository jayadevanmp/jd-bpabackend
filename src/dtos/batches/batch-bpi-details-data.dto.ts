import { Expose, Type } from 'class-transformer';
import { KPIComparisonDTO } from './kpi-comparison.dto';

export class BatchBPIDetailsDataDTO {
  @Expose()
  public name: string;

  @Expose({ name: 'batch_id' })
  public batchId: string;

  @Expose({ name: 'bpi_index' })
  public bpiIndex: number;

  @Expose()
  @Type(() => KPIComparisonDTO)
  public quality: KPIComparisonDTO;

  @Expose({ name: 'cycle_time' })
  @Type(() => KPIComparisonDTO)
  public cycleTime: KPIComparisonDTO;
}
