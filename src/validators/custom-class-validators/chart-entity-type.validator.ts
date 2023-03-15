import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  import { CHART_ENTITY_TYPES } from '../../kernel/constants/chart';

  @ValidatorConstraint({ name: 'chartEntityTypeValidator', async: false })
  export class ChartEntityTypeValidator implements ValidatorConstraintInterface {
    validate(text: string) {
      return Object.values(CHART_ENTITY_TYPES).includes(text);
    }

    defaultMessage() {
      return '($value) not present in the default Chart Entity types';
    }
  }
