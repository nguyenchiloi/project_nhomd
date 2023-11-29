import { Button, Col, Form, Input, Row, message } from "antd";
import React, { useMemo, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import './login.css';
import { Link, useNavigate } from "react-router-dom";
const Login = ({ setIsAuthen, userapi }) => {
        
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usenavigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const memoizedToken = useMemo(() => localStorage.getItem('token'), []);
    const [token, setToken] = useState(memoizedToken);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Đăng nhập thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: 'Bạn đã nhập sai email hoặc mật khẩu',
        });
    };
    const handleSubmit = (e) => {
        let regobj = { email, password };
        fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('type', data.data.type);
                localStorage.setItem('name', data.data.name);
                setIsAuthen(data.data);
                if (data.data.type === 1) {
                    usenavigate('/managers')
                }
                if (data.data.type === 2) {
                    usenavigate('/');
                    userapi();
                }
            } else {
                error(data.message);
            }
        }).catch((err) => {
            error();
        })

    }
    return (
        <>
            {contextHolder}

            <div className="khungLogin">
                <h2>Login</h2>
                <Form onFinish={handleSubmit}>
                    <Row gutter={[16, 8]}>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{
                                required: true,
                                message: "Vui lòng nhập email",
                            },
                            {
                                pattern: "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                                message: "Email không hợp lệ",
                            }]} name="email">
                                <Input size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} value={email} onChange={e => setEmail(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{
                                required: true,
                                message: "Vui lòng nhập password",
                            }]} name="password">
                                <Input type="password" size="large" placeholder="Nhập mật khẩu" prefix={<UserOutlined />} value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Button type="primary" htmlType="submit" className="btn-login" size="large">Đăng nhập</Button>
                        </Col>
                        <Col span={6} offset={7}>
                            <Link to={'/register'} className="link-css">Đăng ký !!!</Link>
                        </Col>
                        <Col span={6} offset={7}>
                            <Link to={'/resetpassword'}  className="link-css">Lấy lại mật khẩu !!!</Link>
                        </Col>
                    </Row>
                </Form>
            </div >


        </>
    )
}
export default Login