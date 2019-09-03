import React from 'react'

import Dashboard from './components/Dashboard'
import './styles/main.css'

class App extends React.Component {
  public render() {
    const Settings = require('./settings.json');

    return (
      <Dashboard title={Settings.title} config={Settings.config} />
    );
  }
}

export default App;
