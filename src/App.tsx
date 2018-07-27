import * as React from 'react'

import Dashboard from './components/Dashboard'
import './styles/main.css'

class App extends React.Component {
  public render() {
    const Config = require('./settings.json');

    return (
      <Dashboard config={Config} />
    );
  }
}

export default App;
