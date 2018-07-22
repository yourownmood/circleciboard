import * as React from 'react'

import Timeline from '../Timeline';

interface InterfaceProps {
  user: string,
  repository: string,
  circleCiKey: string,
}

class Card extends React.Component<InterfaceProps> {
  public render() {
    const { user, repository, circleCiKey } = this.props;

    return (
      <div className='c-card'>
        <p className='c-card__title'>Scheduled-workflow</p>
        <Timeline user={user} repository={repository} circleCiKey={circleCiKey} />
      </div>
    );
  }
}

export default Card;
