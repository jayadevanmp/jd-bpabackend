import { Expose, Type } from 'class-transformer';
import { BatchCycleTimeDetailsContentDTO } from './batch-cycle-time-details-content.dto';

export class BatchCycleTimeDetailsDTO {
  @Expose()
  @Type(() => BatchCycleTimeDetailsContentDTO)
  public data: BatchCycleTimeDetailsContentDTO;

  @Expose()
  public error: object = null;
}
