import React from 'react';
import { Menu, Icon } from 'antd';

function AvatarMenuDropDown() {
  return (
    <Menu>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default AvatarMenuDropDown;
