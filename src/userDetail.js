import React, { useState } from 'react';
import {
  LockOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import ResetPasswordUser from './resetPasswordUser';
import UserInformation from './userInformation';
import ViewOrderDetail from './viewOrderDetail';
const { Header, Sider, Content } = Layout;

const UserDetail = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState(1);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Thông tin người dùng',
              onClick: () => setContent(1),
            },
            {
              key: '2',
              icon: <LockOutlined />,
              label: 'Thay đổi mật khẩu',
              onClick: () => setContent(2),
            },
            {
              key: '3',
              icon: <UnorderedListOutlined />,
              label: 'Xem chi tiết đơn hàng',
              onClick: () => setContent(3),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {content === 1 ? <UserInformation user={user} /> : content === 2 ? <ResetPasswordUser /> : content === 3 ? <ViewOrderDetail user={user} />: ''}
        </Content>
      </Layout>
    </Layout>
  );
};
export default UserDetail;