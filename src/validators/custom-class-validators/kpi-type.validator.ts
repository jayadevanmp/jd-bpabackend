import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { KPI_TYPES } from '../../kernel/constants/kpi';

@ValidatorConstraint({ name: 'kpiTypeValidator', async: false })
export class KPITypeValidator implements ValidatorConstraintInterface {
  validate(text: string) {
    return Object.values(KPI_TYPES).includes(text);
  }

  defaultMessage() {
    return '($value) not present in the default KPI types';
  }
}
