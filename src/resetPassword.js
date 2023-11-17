import { Button, Col, Form, Input, Row, message } from "antd";
import React, { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import './login.css';
import { Link } from "react-router-dom";
const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Gửi yêu cầu thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: 'Gửi yêu cầu thất bại',
        });
    };
    const handleSubmit = async (e) => {
        let regobj = { email };
        if (validate()) {
            fetch('http://127.0.0.1:8000/api/user/send-reset-password-email',{
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then(res => res.json()).then(data => {
                if (data.success) {
                    console.log(data);
                    error(data.message);
                } else {
                    success();
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
        return result;
    }
    return (
        <>
            {contextHolder}
            <div className="khungLogin">
                <h2>Reset Password</h2>
                <Form onFinish={handleSubmit}>
                    <Row gutter={[16, 8]}>
                        <Col span={6} offset={9}>
                            <Input size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} value={email} onChange={e => setEmail(e.target.value)} />
                        </Col>
                        <Col span={6} offset={9}>
                            <Button type="primary" htmlType="submit">Gửi</Button>
                        </Col>
                        <Col span={7} offset={6}>
                            <Link to={'/login'}>Login</Link>
                        </Col>
                    </Row>
                </Form>


            </div>
        </>
    )
}
export default ResetPassword