import { Expose } from 'class-transformer';

export class KPIComparisonDTO {
  @Expose()
  public average: number;

  @Expose()
  public golden: number;
}
