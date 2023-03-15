import { DataModel } from '../../dtos/data-model.dto';
import { createFileLogger } from '../../kernel';
import { batchesRepository } from '../../repository';
import { CHART_TYPES } from '../../kernel/constants/batches';
import { ChartRequestDTO } from '../../dtos/chart';

const logger = createFileLogger('[batches.service.ts]');
const { SPYDER, HISTOGRAM, TRENDS } = CHART_TYPES;

export const batchesChartService = {
  getSpyderChartRequestInput: () => ({
    attributeInfo: {
      dataType: 'Discrete',
      chartTypes: {
        chart: 'spyder',
      },
    },
    requestType: 'Chart',
    DiscreteData: [
      {
        analysisType: 'Golden batch comparison',
        CycleTime: 90,
        RAWMaterials: 99.22,
        Yield: 91.23,
        OperatorPerformance: 99.28,
        Quality: 99.27,
        Wages: 99.25,
        'EM&S': 99.34,
        lotName: 'Average',
        timestamp: 1641497040000,
      },
      {
        analysisType: 'Golden batch comparison ',
        CycleTime: 90,
        RAWMaterials: 100.22,
        Yield: 100.22,
        OperatorPerformance: 100.22,
        Quality: 100.22,
        Wages: 100.22,
        'EM&S': 100.22,
        lotName: 'Golden Batch',
        timestamp: 1641119194000,
      },
      {
        analysisType: 'Golden batch comparison',
        CycleTime: 92,
        RAWMaterials: 101.22,
        Yield: 101.22,
        OperatorPerformance: 101.22,
        Quality: 101.22,
        Wages: 101.22,
        'EM&S': 101.22,
        lotName: 'Current Batch',
        timestamp: 1632793848000,
      },
    ],
  }),

  getTrendsChartRequestInput: () => ({
    attributeInfo: {
      dataType: 'Discrete',
      upperSpecificationLimit: '',

      GoldenBatch: {
        GoldenIndex: 9700,
      },
      CurrentBatch: {
        lotname: '0006691176',
        timestamp: 1632780754000,
      },
      lowerSpecificationLimit: '',
      // OOTAlerts: [],
      // OOTWarnings: [],
      chartTypes: {
        chart: 'TrendChart',
        Metric: 'Viscosity',
      },
    },
    requestType: 'Chart',
    DiscreteData: [
      {
        value: 10753,
        lotName: '0006691173',
        timestamp: 1632780578000,
      },
      {
        value: 9709,
        lotName: '0006691174',
        timestamp: 1632780510000,
      },
      {
        value: 9398,
        lotName: '0006691175',
        timestamp: 1632781076000,
      },
      {
        value: 8792,
        lotName: '0006691176',
        timestamp: 1632780754000,
      },
      {
        value: 9135,
        lotName: '0006691177',
        timestamp: 1641473725000,
      },
      {
        value: 8526,
        lotName: '0006691178',
        timestamp: 1641473811000,
      },
      {
        value: 8523,
        lotName: '0006691179',
        timestamp: 1641473725000,
      },
      {
        value: 8810,
        lotName: '0006691180',
        timestamp: 1632781076000,
      },
      {
        value: 9076,
        lotName: '0006691198',
        timestamp: 1641474712000,
      },
      {
        value: 10291,
        lotName: '0006691199',
        timestamp: 1641474258000,
      },
      {
        value: 10029,
        lotName: '0006691200',
        timestamp: 1641591709000,
      },
      {
        value: 10016,
        lotName: '0006691201',
        timestamp: 1641474712000,
      },
      {
        value: 9635,
        lotName: '0006691202',
        timestamp: 1632780510000,
      },
      {
        value: 9848,
        lotName: '0006691203',
        timestamp: 1632780754000,
      },
      {
        value: 8518,
        lotName: '0006691101',
        timestamp: 1632780578000,
      },
      {
        value: 8776,
        lotName: '0006691182',
        timestamp: 1641473725000,
      },
      {
        value: 8943,
        lotName: '0006691183',
        timestamp: 1641473811000,
      },
      {
        value: 9062,
        lotName: '0006691184',
        timestamp: 1641474712000,
      },
      {
        value: 8856,
        lotName: '0006691185',
        timestamp: 1632781076000,
      },
      {
        value: 9008,
        lotName: '0006691194',
        timestamp: 1632780578000,
      },
      {
        value: 9034,
        lotName: '0006691196',
        timestamp: 1632780510000,
      },
      {
        value: 9325,
        lotName: '0006691197',
        timestamp: 1632780754000,
      },
    ],
  }),

  getHistogramChartRequestInput: () => ({
    attributeInfo: {
      dataType: 'Discrete',
      upperSpecificationLimit: 24000,
      lowerSpecificationLimit: 20000,
      CurrentBatch: {
        lotname: '0007024226',
        value: 21470,
      },
      chartTypes: {
        chart: 'Histogram',
        Metric: 'Viscosity',
      },
    },
    requestType: 'chart',
    DiscreteData: [
      {
        value: 27370,
        lotName: 'T13525#S75',
      },
      {
        value: 21330,
        lotName: 'T13525#S75',
      },
      {
        value: 23000,
        lotName: 'T13525#S75',
      },
      {
        value: 20330,
        lotName: 'T13525#S75',
      },
      {
        value: 27330,
        lotName: 'T13525#S75',
      },
      {
        value: 21600,
        lotName: 'T13525#S75',
      },
      {
        value: 22070,
        lotName: 'T13525#S75',
      },
      {
        value: 21800,
        lotName: 'T13525#S75',
      },
      {
        value: 21600,
        lotName: 'T13525#S75',
      },
      {
        value: 21330,
        lotName: 'T13525#S75',
      },
      {
        value: 22730,
        lotName: 'T13525#S75',
      },
      {
        value: 21330,
        lotName: 'T13525#S75',
      },
      {
        value: 24000,
        lotName: 'T13525#S75',
      },
      {
        value: 21800,
        lotName: 'T13525#S75',
      },
      {
        value: 21670,
        lotName: 'T13525#S75',
      },
      {
        value: 22400,
        lotName: 'T13525#S75',
      },
      {
        value: 23130,
        lotName: 'T13525#S75',
      },
      {
        value: 20270,
        lotName: 'T13525#S75',
      },
      {
        value: 24130,
        lotName: 'T13525#S75',
      },
      {
        value: 21570,
        lotName: 'T13525#S75',
      },
      {
        value: 22670,
        lotName: 'T13525#S75',
      },
      {
        value: 21370,
        lotName: 'T13525#S75',
      },
      {
        value: 21470,
        lotName: 'T13525#S75',
      },
      {
        value: 21120,
        lotName: 'T13525#S75',
      },
      {
        value: 21550,
        lotName: 'T13525#S75',
      },
      {
        value: 21570,
        lotName: 'T13525#S75',
      },
      {
        value: 21370,
        lotName: 'T13525#S75',
      },
      {
        value: 21560,
        lotName: 'T13525#S75',
      },
      {
        value: 21530,
        lotName: 'T13525#S75',
      },
      {
        value: 21380,
        lotName: 'T13525#S75',
      },
      {
        value: 21370,
        lotName: 'T13525#S75',
      },
      {
        value: 21340,
        lotName: 'T13525#S75',
      },
      {
        value: 21320,
        lotName: 'T13525#S75',
      },
      {
        value: 21270,
        lotName: 'T13525#S75',
      },
      {
        value: 21470,
        lotName: 'T13525#S75',
      },
      {
        value: 21970,
        lotName: 'T13525#S75',
      },
      {
        value: 21570,
        lotName: 'T13525#S75',
      },
      {
        value: 20370,
        lotName: 'T13525#S75',
      },
      {
        value: 21070,
        lotName: 'T13525#S75',
      },
      {
        value: 21370,
        lotName: 'T13525#S75',
      },
      {
        value: 21170,
        lotName: 'T13525#S75',
      },
      {
        value: 22370,
        lotName: 'T13525#S75',
      },
      {
        value: 21330,
        lotName: 'T13525#S75',
      },
      {
        value: 25370,
        lotName: 'T13525#S75',
      },
      {
        value: 21380,
        lotName: 'T13525#S75',
      },
    ],
  }),

  async getSpyderChart() {
    try {
      logger.info('[Get Spyder Chart]');
      const resp = await batchesRepository.getSpyderChart(
        this.getSpyderChartRequestInput()
      );
      logger.info(
        `[Get Spyder Chart SPC API Success]::response::${JSON.stringify(
          resp.data
        )}`
      );
      return new DataModel(resp.data.chart, null);
    } catch (err) {
      logger.error(`[Get Spyder Chart]::error::${err}`);
      throw err;
    }
  },

  async getTrendsChart() {
    try {
      logger.info('[Get Trends Chart]');
      const resp = await batchesRepository.getTrendsChart(
        this.getTrendsChartRequestInput()
      );
      logger.info(
        `[Get Trends Chart SPC API Success]::response::${JSON.stringify(
          resp.data
        )}`
      );
      return new DataModel(resp.data.chart, null);
    } catch (err) {
      logger.error(`[Get Trends Chart]::error::${err}`);
      throw err;
    }
  },

  async getHistogramChart() {
    try {
      logger.info('[Get Histogram Chart]');
      const resp = await batchesRepository.getHistogramChart(
        this.getHistogramChartRequestInput()
      );
      logger.info(
        `[Get Histogram Chart SPC API Success]::response::${JSON.stringify(
          resp.data
        )}`
      );
      return new DataModel(resp.data.chart, null);
    } catch (err) {
      logger.error(`[Get Histogram Chart]::error::${err}`);
      throw err;
    }
  },

  async getBatchChart(query: ChartRequestDTO) {
    try {
      const { type } = query;
      let resp = null;
      switch (type) {
        case TRENDS:
          resp = await this.getTrendsChart();
          break;
        case HISTOGRAM:
          resp = await this.getHistogramChart();
          break;
        case SPYDER:
          resp = await this.getSpyderChart();
          break;
        default:
          throw new Error('Invalid Chart Type');
      }
      logger.info(
        `[Get Batch Chart Success]::response::${JSON.stringify(resp)}`
      );
      return resp;
    } catch (err) {
      logger.error(`[Get Batch Chart]::error::${err}`);
      throw err;
    }
  },
};
