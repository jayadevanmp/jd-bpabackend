import { Expose, Type } from 'class-transformer';
import { BatchQualityDetailsContentDTO } from './batch-quality-details-content.dto';

export class BatchQualityDetailsDTO {
  @Expose()
  @Type(() => BatchQualityDetailsContentDTO)
  public data: BatchQualityDetailsContentDTO;

  @Expose()
  public error: object = null;
}
