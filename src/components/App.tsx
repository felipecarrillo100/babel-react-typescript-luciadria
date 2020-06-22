import * as React from 'react';
import LuciadMap from './luciad/luciadmap/LuciadMap';
import './App.scss';

// <LuciadMap mapProjection="epsg:4978" />

class App extends React.Component {
  public static x = 'felipe';
  render(): JSX.Element {
    return (
      <div className="App">
        <LuciadMap mapProjection="epsg:4978" />
      </div>
    );
  }
}

export default App;
