import React from 'react'

interface InterfaceProps {
  label: string,
}

class Loader extends React.Component<InterfaceProps> {
  public render() {
    const { label } = this.props;

    return (
      <div className='c-loader'>
        {label}
      </div>
    );
  }
}

export default Loader;
