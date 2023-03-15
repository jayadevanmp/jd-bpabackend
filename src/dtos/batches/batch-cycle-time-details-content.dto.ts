import { Expose, Type } from 'class-transformer';
import { KPIComparisonDTO } from './kpi-comparison.dto';

export class BatchCycleTimeDetailsContentDTO {
  @Expose()
  public name: string;

  @Expose({ name: 'batch_id' })
  public batchId: string;

  @Expose({ name: 'cycle_time' })
  public cycleTime: number;

  @Expose({ name: 'process_alarms' })
  @Type(() => KPIComparisonDTO)
  public processAlarams: KPIComparisonDTO;

  @Expose({ name: 'prompt_response_time_average' })
  @Type(() => KPIComparisonDTO)
  public promptResponseTimeAverage: KPIComparisonDTO;

  @Expose({ name: 'abnormal_state_change' })
  @Type(() => KPIComparisonDTO)
  public abnormalStateChange: KPIComparisonDTO;

  @Expose({ name: 'resource_availability_delay' })
  @Type(() => KPIComparisonDTO)
  public resourceAvailabilityDelay: KPIComparisonDTO;

  @Expose({ name: 'time_spent_inhold' })
  @Type(() => KPIComparisonDTO)
  public timeSpentInHold: KPIComparisonDTO;
}
