import { Expose, Transform } from 'class-transformer';

export class BatchDetailsContentDTO {
  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public tags: string[];

  @Expose({ name: 'enterprise_name' })
  public enterpriseName: string;

  @Expose({ name: 'product_code' })
  public productCode: string;

  @Expose({ name: 'recipe_name' })
  public recipeName: string;

  @Expose({ name: 'site_name' })
  public siteName: string;

  @Expose({ name: 'product_desc' })
  public productDesc: string;

  @Expose({ name: 'area_name' })
  public areaName: string;

  @Expose({ name: 'recipe_formulation' })
  public recipeFormulation: string;

  @Expose({ name: 'batch_status' })
  public batchStatus: string;

  @Expose({ name: 'process_cell_name' })
  public processCellName: string;

  @Expose({ name: 'unit_name' })
  public unitName: string;

  @Expose({ name: 'start_time_batch_list' })
  @Transform((obj) => new Date(obj.value), { toClassOnly: true })
  public startTimeBatchList: Date;

  @Expose({ name: 'batch_id' })
  public batchId: string;

  @Transform((obj) => new Date(obj.value), { toClassOnly: true })
  @Expose({ name: 'end_time_batch_list' })
  public endTimeBatchList: number;

  @Expose({ name: 'gb_name' })
  public gbName: string;

  @Expose({ name: 'is_gb' })
  public isGB: boolean;
}
