import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CHART_TYPES } from '../../kernel/constants/batches';

@ValidatorConstraint({ name: 'chartTypeValidator', async: false })
export class ChartTypeValidator implements ValidatorConstraintInterface {
  validate(text: string) {
    return Object.values(CHART_TYPES).includes(text);
  }

  defaultMessage() {
    return '($value) not present in the default Chart types';
  }
}
