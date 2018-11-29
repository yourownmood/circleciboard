import * as React from 'react'

import Card from '../Card';
import Header from '../Header';

interface InterfaceProps {
  title: string,
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
    const { config, title } = this.props;

    let layout: string

    if (config.length < 3) {
      layout = '1'
    } else if (config.length < 6) {
      layout = '2'
    } else {
      layout = '3'
    }

    return (
      <div className='c-dashboard'>
        <Header title={title} />
        <div className='o-wrapper'>
          <div className='o-layout'>
            {config.length &&
              config.map((configuration) => (
                <div key={configuration.workflow} className={`o-layout__item u-1/${layout}@tablet`}>
                  <Card
                    circleCiKey={configuration.circleCiKey}
                    limit={configuration.limit}
                    repository={configuration.repository}
                    title={configuration.title}
                    user={configuration.user}
                    workflow={configuration.workflow}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
