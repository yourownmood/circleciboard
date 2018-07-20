import * as React from 'react'

import Dashboard from './components/Dashboard'

import data from './settings.json'
import './styles/main.css'

class App extends React.Component {
  public render() {
    return (
      <Dashboard
        user={data.user}
        repository={data.repository}
        circleCiKey={data.circleCiKey}
      />
    );
  }
}

export default App;
