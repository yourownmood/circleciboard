import * as React from 'react'

import Card from '../Card';
import Header from '../Header';

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
        <Header title='Eneco Salesflow' />
        <div className='o-wrapper'>
          <Card user={user} repository={repository} circleCiKey={circleCiKey} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
