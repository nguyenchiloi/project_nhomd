import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductManager from './productManager';
import axios from 'axios';
const { Header, Sider, Content } = Layout;
const Managers = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState(1);
  const [listProduct, setListProduct] = useState([]);
  const usenavigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //Kieemr tra co phai admin hay k?
  useEffect(() => {
    let type = localStorage.getItem('type');
    if (type === '2') {
      usenavigate('/')
    }
  }, [])

  return (
    <div style={{ margin: 50 }}>
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
                icon: <ShoppingCartOutlined />,
                label: 'Quản lý sản phẩm',
                onClick: () => setContent(1),
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: 'nav 2',
                onClick: () => setContent(2),
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
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
            {content === 1 ?
              <ProductManager />
              : content === 2 ?
                content : ''}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default Managers;