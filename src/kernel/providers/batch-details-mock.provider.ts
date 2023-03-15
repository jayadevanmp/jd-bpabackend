export const batchDetailsMockProvider = {
  getBatchDetails: (id: string) =>
    new Promise((resolve) => {
      resolve({
        name: 'ISBPM.Batch.17',
        description: '',
        tags: ['aeration_rate'],
        enterprise_name: 'Enterprise1',
        product_code: '',
        recipe_name: 'BPA_PENICILLIN.BPC',
        site_name: 'Site1',
        product_desc: '',
        area_name: 'AREA1',
        recipe_formulation: '',
        batch_status: 'COMPLETE',
        process_cell_name: 'PROCESS_CELL1',
        unit_name: 'UNIT_1',
        start_time_batch_list: 1642924800000,
        batch_id: id,
        end_time_batch_list: 1643601600000,
        gb_name: '',
        is_gb: false,
      });
    }),
  getBatchBPI: (id: string) =>
    new Promise((resolve) => {
      resolve({
        name: 'ISBPM.Batch.17',
        batch_id: id,
        bpi_index: 74.91,
        quality: {
          average: 74.91,
          golden: 85.85,
        },
        cycle_time: {
          average: 181.0,
          golden: 202,
        },
      });
    }),
  getBatchQuality: (id: string) =>
    new Promise((resolve) => {
      resolve({
        name: 'ISBPM.Batch.17',
        batch_id: id,
        quality: {
          average: 61.14,
          golden: 88.2,
        },
        quality_parameters: [
          {
            name: 'QP1',
            process_parameter: 'PenicillinYield',
            average: 69.24,
            golden: 74.08,
          },
          {
            name: 'QP2',
            process_parameter: 'Viscosity',
            average: 55.74,
            golden: 97.62,
          },
        ],
      });
    }),
  getBatchCycleTime: (id: string) =>
    new Promise((resolve) => {
      resolve({
        name: 'ISBPM.Batch.17',
        batch_id: id,
        cycle_time: 90.2,
        process_alarms: {
          average: 4,
          golden: 2,
        },
        prompt_response_time_average: {
          average: 3,
          golden: 7,
        },
        abnormal_state_change: {
          average: 74.91,
          golden: 85.85,
        },
        resource_availability_delay: {
          average: 11.91,
          golden: 4.85,
        },
        time_spent_inhold: {
          average: 6.91,
          golden: 6.85,
        },
      });
    }),
};
