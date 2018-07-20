import * as React from 'react'

interface InterfaceProps {
  key: string,
  status: 'succes' | 'error' | 'pending'
}

class Status extends React.Component<InterfaceProps> {
  public render() {
    const { status } = this.props;

    return (
      <span className={`c-status c-status--${status}`}>
        {status === 'succes' && <b>v</b>}
        {status === 'error' && <b>x</b>}
        {status === 'pending' && <b>-</b>}
      </span>
    );
  }
}

export default Status;
