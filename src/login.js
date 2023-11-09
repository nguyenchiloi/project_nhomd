import { Button, Col, Form, Input, Row, message } from "antd";
import React, { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import './login.css';
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usenavigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Đăng nhập thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: 'Đăng nhập thất bại',
        });
    };
    const handleSubmit = async (e) => {
        let regobj = { email, password };
        if (validate()) {
            const response = fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then(res => res.json()).then(data => {
                if (data.success) {
                    success();
                    usenavigate('/');
                } else {
                    error(data.message);
                }
            }).catch((err) => {
                error();
            })
        }

    }
    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
        }
        if (password === '' || password === null) {
            result = false;
        }
        return result;
    }
    return (
        <>
            {contextHolder}
            <div className="khungLogin">
                <h2>Login</h2>
                <Form onFinish={handleSubmit}>
                    <Row gutter={[16, 8]}>
                        <Col span={6} offset={9}>
                            <Input size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} value={email} onChange={e => setEmail(e.target.value)} />
                        </Col>
                        <Col span={6} offset={9}>
                            <Input type="password" size="large" placeholder="Nhập mật khẩu" prefix={<UserOutlined />} value={password} onChange={e => setPassword(e.target.value)} />
                        </Col>
                        <Col span={6} offset={9}>
                            <Button type="primary" htmlType="submit">Đăng nhập</Button>
                        </Col>
                        <Col span={6} offset={7}>
                            <Link to={'/register'}>Đăng ký</Link>
                        </Col>
                        <Col span={6} offset={7}>
                            <Link to={'/resetpassword'}>Lấy lại mật khẩu</Link>
                        </Col>
                    </Row>
                </Form>


            </div>
        </>
    )
}
export default Login