import * as React from 'react'

import Card from '../Card';
import Header from '../Header';

interface InterfaceProps {
  circleCiKey: string,
  repository: string,
  user: string,
  workflow: string,
}

class Dashboard extends React.Component<InterfaceProps> {
  public render() {
    const { user, repository, circleCiKey, workflow } = this.props;

    return (
      <div className='c-dashboard'>
        <Header title='Eneco Salesflow' />
        <div className='o-wrapper'>
          <Card
            circleCiKey={circleCiKey}
            repository={repository}
            user={user}
            workflow={workflow}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
