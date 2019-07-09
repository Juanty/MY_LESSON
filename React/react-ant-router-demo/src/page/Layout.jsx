import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Table from './Table'
import Label1 from './Label1'
import Label2 from './Label2'
import Label3 from './Label3'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class PageLayout extends Component {
  state = {  }
  render() { 
    return ( 
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/table">表格</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/label1">标签1</Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Link to="/label2">标签2</Link>
              </Menu.Item>
              <Menu.Item key="4">
                  <Link to="/label3">标签3</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* 加上路由组件 */}
              <Route path="/table" component ={Table} />
              <Route path="/label1" component ={Label1} />
              <Route path="/label2" component ={Label2} />
              <Route path="/label3" component ={Label3} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
     );
  }
}
 
export default PageLayout;