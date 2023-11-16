import { Button, Col, Form, Input, Row, message } from "antd";
import React, { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import './login.css';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setGmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [r_password, setRpassword] = useState("");
    const usenavigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Đăng ký thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Đăng ký thất bại',
        });
    };
    const handlesubmit = (e) => {
        // e.preventDefault();
        let regobj = { name, email, phone, password, r_password };
        fetch('http://127.0.0.1:8000/api/register', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                usenavigate('/login');
                success();
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
                <h2>Register</h2>
                <Form onFinish={handlesubmit}>
                    <Row gutter={[16, 8]}>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập tên' }]} name="name">
                                <Input size="large" placeholder="Nhập name" prefix={<UserOutlined />} name="name" value={name} onChange={e => setName(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập email",
                                },
                                {
                                    pattern: "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                                    message: "Email không hợp lệ",
                                },
                            ]} name="email" >
                                <Input size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} name="email" value={email} onChange={e => setGmail(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập số điện thoại",
                                },
                                {
                                    pattern: "\\d{10}",
                                    message: "Số điện thoại phải bao gồm 10 chữ số",
                                },
                            ]} name="phone">
                                <Input size="large" placeholder="Nhập phone" prefix={<UserOutlined />} name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập mật khẩu' }]} name="password">
                                <Input type="password" size="large" placeholder="Nhập mật khẩu" prefix={<UserOutlined />} name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập lại mật khẩu' }]} name="r_password">
                                <Input type="password" size="large" placeholder="Nhập lại mật khẩu" prefix={<UserOutlined />} name="r_password" value={r_password} onChange={e => setRpassword(e.target.value)} />
                            </Form.Item>
                        </Col>

                        <Col span={6} offset={9}>
                            <Button type="primary" htmlType="submit">Đăng ký</Button>
                        </Col>
                        <Col span={6} offset={7}>
                            <Link to={'/login'}>Đăng nhập</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}
export default Register