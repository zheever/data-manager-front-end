import React, { Component } from 'react';
import cx from 'classnames';
import { Dropdown, Icon } from 'antd';
import AvatarMenuDropDown from './avatar-drop-down/index.js';
import './index.less';

class TopNavbar extends Component {
  render() {
    return (
      <div className={'top-navbar'}>
        <div className={'avatar-container'}>
          <div className={cx('avatar-wrapper', 'clearfix')}>
            <Dropdown overlay={AvatarMenuDropDown}>
              <img
                className={'avatar'}
                src={require('./images/avatar.png')}
                alt={'avatar'}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNavbar;
