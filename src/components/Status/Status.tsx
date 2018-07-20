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
        {status === 'success' && <b>v</b>}
        {status === 'error' && <b>x</b>}
        {status === 'pending' && <b>-</b>}
      </a>
    );
  }
}

export default Status;
