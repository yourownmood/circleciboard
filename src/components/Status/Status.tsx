import * as React from 'react'

interface InterfaceProps {
  key: string,
  status: 'success' | 'error' | 'pending' | 'not_running',
  url: string
}

class Status extends React.Component<InterfaceProps> {
  public render() {
    const { status, url } = this.props;

    return (
      <a href={url} target='_blank' rel='noopener noreferrer' className={`c-status c-status--${status}`}>
        {status === 'success' && <span className='c-status__icon'><span className='u-hidden-visually'>Success</span></span>}
        {status === 'error' && <span className='c-status__icon'><span className='u-hidden-visually'>Failed</span></span>}
        {status === 'pending' && <span className='c-status__icon'><span className='u-hidden-visually'>Pending</span></span>}
        {status === 'not_running' && <span className='c-status__icon'><span className='u-hidden-visually'>Waiting</span></span>}
      </a>
    );
  }
}

export default Status;
