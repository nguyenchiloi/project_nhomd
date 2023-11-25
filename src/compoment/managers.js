import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UnorderedListOutlined,
  BankOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import ProductManager from './productManager';
import CategoryManager from './categoryManager';
import axios from 'axios';
import UserManager from './userManager';
import ShowroomManager from './showroomManager';
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
    <div style={{ padding: 50, background: "#423f3e" }}>
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
                icon: <UnorderedListOutlined />,
                label: 'Quản lý danh mục',
                onClick: () => setContent(2),
              },
              {
                key: '3',
                icon: <UserOutlined />,
                label: 'Quản lý user',
                onClick: () => setContent(3),
              },
              {
                key: '4',
                icon: <BankOutlined />,
                label: 'Quản lý showroom',
                onClick: () => setContent(4),
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
                <CategoryManager />
                : content === 3 ?
                  <UserManager />
                  : content === 4 ?
                    <ShowroomManager /> : ''}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default Managers;