import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  import { KPI_ENTITY_TYPES } from '../../kernel/constants/kpi';

  @ValidatorConstraint({ name: 'kpiEntityTypeValidator', async: false })
  export class KPIEntityTypeValidator implements ValidatorConstraintInterface {
    validate(text: string) {
      return Object.values(KPI_ENTITY_TYPES).includes(text);
    }

    defaultMessage() {
      return '($value) not present in the default KPI Entity types';
    }
  }
