import { Expose, Type } from 'class-transformer';
import { BatchDetailsContentDTO } from './batch-details-content.dto';

export class BatchDetailsDTO {
  @Expose()
  @Type(() => BatchDetailsContentDTO)
  public data: BatchDetailsContentDTO;

  @Expose()
  public error: object = null;
}
