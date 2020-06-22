import * as React from 'react';

import './LuciadMap.scss';
import { WebGLMap } from '@luciad/ria/view/WebGLMap';
import { getReference } from '@luciad/ria/reference/ReferenceProvider';
import LayerFactory from './factories/LayerFactory';

interface Props {
  mapProjection: string;
}

class LuciadMap extends React.Component<Props, any> {
  private luciadmapref: HTMLElement | null;
  private map: WebGLMap | null = null;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.createMap(this.props.mapProjection);
    this.createDefaultLayers();
  }

  render() {
    return (
      <div className="LuciadMap" ref={(ref) => (this.luciadmapref = ref)} />
    );
  }

  componentWillUnmount() {
    this.map?.destroy();
  }

  private createMap(mapProjection: any) {
    const reference = getReference(mapProjection);
    if (this.luciadmapref !== null) {
      const map = new WebGLMap(this.luciadmapref, { reference });
      this.map = map;
    }
  }

  private createDefaultLayers() {
    if (this.map) {
      const gridlayer = LayerFactory.createGridLayer({ label: 'Grid' });
      this.map.layerTree.addChild(gridlayer);
    }
  }
}

export default LuciadMap;
