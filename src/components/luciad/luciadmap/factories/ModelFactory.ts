import { LonLatPointFormat } from '@luciad/ria/shape/format/LonLatPointFormat';
import { LonLatGrid } from '@luciad/ria/view/grid/LonLatGrid';

const DefaultGridSettings = {
  settings: [
    { scale: 40000.0e-9, deltaLon: 1 / 60, deltaLat: 1 / 60 },
    { scale: 20000.0e-9, deltaLon: 1 / 30, deltaLat: 1 / 30 },
    { scale: 10000.0e-9, deltaLon: 1 / 10, deltaLat: 1 / 10 },
    { scale: 5000.0e-9, deltaLon: 1 / 2, deltaLat: 1 / 2 },
    { scale: 1000.0e-9, deltaLon: 1, deltaLat: 1 },
    { scale: 200.0e-9, deltaLon: 5, deltaLat: 5 },
    { scale: 20.0e-9, deltaLon: 10, deltaLat: 10 },
    { scale: 9.0e-9, deltaLon: 20, deltaLat: 20 },
    { scale: 5.0e-9, deltaLon: 30, deltaLat: 30 },
    { scale: 0, deltaLon: 45, deltaLat: 45 },
  ],
  options: undefined as any,
  fallbackStyle: {
    labelFormat: new LonLatPointFormat({ pattern: 'lat(+DM),lon(+DM)' }),
    labelStyle: {
      fill: 'rgb(220,220,220)',
      font: '12px sans-serif',
      halo: 'rgb(102,102,102)',
      haloWidth: 3,
    },
    lineStyle: {
      color: 'rgba(210,210,210,0.6)',
      width: 1,
    },
    originLabelFormat: new LonLatPointFormat({ pattern: 'lat(+D),lon(+D)' }),
    originLabelStyle: {
      fill: 'rgba(210,210,210,0.8)',
      font: '12px sans-serif',
      halo: 'rgba(230, 20, 20, 0.8)',
      haloWidth: 3,
    },
    originLineStyle: {
      color: 'rgba(230, 20, 20, 0.6)',
      width: 2,
    },
  },
};

class ModelFactory {
  static createGridModel(command?: any): LonLatGrid {
    command = command ? command : {};
    command.settings = command.settings
      ? command.settings
      : DefaultGridSettings.settings;
    command.options = command.options
      ? command.options
      : DefaultGridSettings.options;
    command.fallbackStyle = command.fallbackStyle
      ? command.fallbackStyle
      : DefaultGridSettings.fallbackStyle;
    const model = new LonLatGrid(command.settings, command.options);
    return model;
  }
}

export default ModelFactory;
