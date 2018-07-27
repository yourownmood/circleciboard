import * as React from 'react'

import Timeline from '../Timeline';

interface InterfaceProps {
  circleCiKey: string,
  limit: number,
  repository: string,
  title: string,
  user: string,
  workflow: string
}

class Card extends React.Component<InterfaceProps> {
  public render() {
    const { circleCiKey, limit, repository, title, user, workflow } = this.props;

    return (
      <div className='c-card'>
        <p className='c-card__title'>{title}</p>
        <p className='c-card__subline'>{workflow}</p>
        <Timeline
          circleCiKey={circleCiKey}
          limit={limit}
          repository={repository}
          user={user}
          workflow={workflow}
        />
      </div>
    );
  }
}

export default Card;
