import { Button, Col, Input, Row } from "antd";
import React from "react";
import { UserOutlined } from '@ant-design/icons';
import './login.css';
const Login = () => {
    return (
        <>
            <div className="khungLogin">
                <h2>Login</h2>
                <Row gutter={[16, 8]}>
                    <Col span={6} offset={9}>
                        <Input size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} />
                    </Col>
                    <Col span={6} offset={9}>
                        <Input type="password" size="large" placeholder="Nhập mật khẩu" prefix={<UserOutlined />} />
                    </Col>
                    <Col span={6} offset={9}>
                        <Button type="primary">Đăng nhập</Button>
                    </Col>
                </Row>

            </div>
        </>
    )
}
export default Login