import * as React from 'react'

interface InterfaceProps {
  title: string,
}

class Header extends React.Component<InterfaceProps> {
  public render() {
    const { title } = this.props;

    return (
      <header className='c-header'>
        <h1>{title}</h1>
      </header>
    );
  }
}

export default Header;
