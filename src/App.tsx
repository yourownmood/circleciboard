import * as React from 'react'

import Dashboard from './components/Dashboard'
import './styles/main.css'

class App extends React.Component {
  public render() {
    const Settings = require('./settings.json');

    return (
      <Dashboard
        user={Settings.user}
        repository={Settings.repository}
        circleCiKey={Settings.circleCiKey}
        workflow={Settings.workflow}
      />
    );
  }
}

export default App;
