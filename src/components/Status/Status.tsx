import * as React from 'react'

interface InterfaceProps {
  key: string,
  status: 'success' | 'error' | 'pending',
  url: string
}

class Status extends React.Component<InterfaceProps> {
  public render() {
    const { status, url } = this.props;

    return (
      <a href={url} target='_blank' rel='noopener noreferrer' className={`c-status c-status--${status}`}>
        {status === 'success' && <span className='c-status__icon'>v</span>}
        {status === 'error' && <span className='c-status__icon'>x</span>}
        {status === 'pending' && <span className='c-status__icon'>-</span>}
      </a>
    );
  }
}

export default Status;
