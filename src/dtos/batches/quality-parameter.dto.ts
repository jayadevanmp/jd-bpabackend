import { Expose } from 'class-transformer';

export class QualityParameterDTO {
  @Expose()
  public name: string;

  @Expose({ name: 'process_parameter' })
  public processParameter: string;

  @Expose()
  public average: number;

  @Expose()
  public golden: number;
}
