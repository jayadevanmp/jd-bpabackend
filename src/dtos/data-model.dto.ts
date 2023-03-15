export class DataModel {
  data: unknown;

  error: object;

  constructor(data: unknown, error: object) {
    this.data = data;
    this.error = error;
  }
}
