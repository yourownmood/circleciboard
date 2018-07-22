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
        <div className='o-wrapper'>
          <Header title='Eneco Salesflow' />
          <Card user={user} repository={repository} circleCiKey={circleCiKey} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
