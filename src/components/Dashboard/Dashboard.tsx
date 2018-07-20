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
              Eneco Salesflow<br/>Smoke test
            </h1>
          </header>
          <p>
            Scheduled-workflow (all)
          </p>

          <Timeline user={user} repository={repository} circleCiKey={circleCiKey} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
