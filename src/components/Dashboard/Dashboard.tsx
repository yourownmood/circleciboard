import * as React from 'react'

import Timeline from '../Timeline';

interface InterfaceProps {
  user: string,
  repository: string,
  circleCiKey: string,
}

class Dashboard extends React.Component<InterfaceProps> {
  public render() {
    const { user, repository, circleCiKey } = this.props;

    return (
      <div className='c-dashboard'>
        <div className='o-wrapper'>
          <header>
            <h1>
              Eneco Salesflow
            </h1>
          </header>
          <p>
            Scheduled-workflow
          </p>

          <Timeline user={user} repository={repository} circleCiKey={circleCiKey} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
