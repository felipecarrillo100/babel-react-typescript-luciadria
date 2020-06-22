import ModelFactory from './ModelFactory';
import { GridLayer } from '@luciad/ria/view/grid/GridLayer';

class LayerFactory {
  static createGridLayer(options: any) {
    const model = ModelFactory.createGridModel();
    const layer = new GridLayer(model, options);
    return layer;
  }
}

export default LayerFactory;
