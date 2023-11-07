import { Button, Col, Form, Input, Row, message } from "antd";
import React, { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import './login.css';
import { toast } from "react-toastify";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setGmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [r_password, setRpassword] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Đăng ký thành công',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Đăng ký thất bại',
        });
    };
    const handlesubmit = (e) => {
        // e.preventDefault();
        let regobj = { name, email, phone, password, r_password };
        fetch('http://127.0.0.1:8000/api/register', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            if (res.success)
                success();
            else
                error();
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
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập tên' }]}>
                                <Input size="large" placeholder="Nhập name" prefix={<UserOutlined />} value={name} onChange={e => setName(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập email' }]}>
                                <Input size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} value={email} onChange={e => setGmail(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập số điện thoại' }]}>
                                <Input size="large" placeholder="Nhập phone" prefix={<UserOutlined />} value={phone} onChange={e => setPhone(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập mật khẩu' }]}>
                                <Input type="password" size="large" placeholder="Nhập mật khẩu" prefix={<UserOutlined />} value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Form.Item rules={[{ required: true, message: 'vui lòng nhập lại mật khẩu' }]} >
                                <Input type="password" size="large" placeholder="Nhập lại mật khẩu" prefix={<UserOutlined />} value={r_password} onChange={e => setRpassword(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={9}>
                            <Button type="primary" htmlType="submit">Đăng ký</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}
export default Register