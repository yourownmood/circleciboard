import * as React from 'react'

import Card from '../Card';
import Header from '../Header';

interface InterfaceProps {
  config: Array<{
    circleCiKey: string,
    limit: number,
    repository: string,
    title: string,
    user: string,
    workflow: string
  }>
}

class Dashboard extends React.Component<InterfaceProps> {
  public render() {
    const { config } = this.props;

    return (
      <div className='c-dashboard'>
        <Header title='Eneco Salesflow' />
        <div className='o-wrapper'>
          {config.length &&
            config.map((configuration) => (
              <Card
                key={configuration.workflow}
                circleCiKey={configuration.circleCiKey}
                limit={configuration.limit}
                repository={configuration.repository}
                title={configuration.title}
                user={configuration.user}
                workflow={configuration.workflow}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
