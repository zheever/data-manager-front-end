import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router';
import './index.less';

const SubMenu = Menu.SubMenu;

@withRouter
class NavigationMenu extends Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  jumpTo = path => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div className={'navigation-menu'}>
        {/*<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>*/}
        {/*<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />*/}
        {/*</Button>*/}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item
            onClick={() => {
              this.jumpTo('/');
            }}
            key="1"
          >
            <Icon type="pie-chart" />
            <span>上传文件</span>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              this.jumpTo('/table');
            }}
            key="2"
          >
            <Icon type="desktop" />
            <span>数据</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>统计分析</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>数据管理</span>
              </span>
            }
          >
            <Menu.Item
              key="5"
              onClick={() => {
                this.jumpTo('/add-data');
              }}
            >
              增加数据
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => {
                this.jumpTo('/delete-data');
              }}
            >
              删除数据
            </Menu.Item>
            <Menu.Item key="7">修改数据</Menu.Item>
            <Menu.Item key="8">查找数据</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            onClick={() => {
              this.jumpTo('/table-list');
            }}
            title={
              <span>
                <Icon type="appstore" />
                <span>历史</span>
              </span>
            }
          >
            <Menu.Item key="9">历史数据</Menu.Item>
            <Menu.Item
              onClick={() => {
                this.jumpTo('/file-list');
              }}
              key="10"
            >
              历史文件
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default NavigationMenu;
