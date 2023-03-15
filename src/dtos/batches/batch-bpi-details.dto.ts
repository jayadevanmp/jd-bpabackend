import { Expose, Type } from 'class-transformer';
import { BatchBPIDetailsDataDTO } from './batch-bpi-details-data.dto';

export class BatchBPIDetailsDTO {
  @Expose()
  @Type(() => BatchBPIDetailsDataDTO)
  public data: BatchBPIDetailsDataDTO;

  @Expose()
  public error: object = null;
}
