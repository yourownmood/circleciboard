import * as React from 'react'

import Timeline from '../Timeline';

interface InterfaceProps {
  circleCiKey: string,
  repository: string,
  user: string,
  workflow: string
}

class Card extends React.Component<InterfaceProps> {
  public render() {
    const { circleCiKey, repository, user, workflow } = this.props;

    return (
      <div className='c-card'>
        <p className='c-card__title'>{workflow}</p>
        <Timeline
          circleCiKey={circleCiKey}
          repository={repository}
          user={user}
          workflow={workflow}
        />
      </div>
    );
  }
}

export default Card;
