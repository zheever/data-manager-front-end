import React, { Component } from 'react';
import NavigationMenu from './navigation-menu/index.js';
import TopNavbar from './top-navbar/index.js';
import './index.less';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={'layout-root'}>
        <TopNavbar />
        <div className={'layout-body'}>
          <div className={'layout-body-left-part'}>
            <NavigationMenu />
          </div>
          <div className={'layout-content'}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
