import React, { useState } from 'react'
import './contact.css'
import { ContactsOutlined } from "@ant-design/icons"
import { Button, Col, Form, Input, Row, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [messages, setMessage] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Gửi liên hệ thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Gửi liên hệ thất bại',
        });
    };
    const handleSubmit = (e) => {
        let message = messages;
        let regobj = { name,email,title, message };
        fetch('http://127.0.0.1:8000/api/contact', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                form.resetFields();
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
            <div className='contact_container'>
                <div className='contant'>
                    <h2><ContactsOutlined /> Liên hệ với chúng tôi</h2>
                    <div className='form'>
                        <Form form={form} layout="vertical" onFinish={handleSubmit}>
                            <Row className="d-flex" justify="start" gutter={[0, 15]}>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name="name"
                                        label="Tên người dùng:"
                                        rules={[{ required: true, message: 'vui lòng nhập tên' }]}
                                        style={{marginLeft: "35%"}}
                                    >
                                        <Input placeholder="Nhập tên người dùng" name="name" onChange={e => setName(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name="email"
                                        label="Email:"
                                        rules={[{
                                            required: true,
                                            message: "Vui lòng nhập email",
                                        },
                                        {
                                            pattern: "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                                            message: "Email không hợp lệ",
                                        }]}
                                        style={{marginLeft: "35%"}}
                                    >
                                        <Input placeholder="Nhập email" name="name" onChange={e => setEmail(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name="title"
                                        label="Tiêu đề:"
                                        rules={[{ required: true, message: 'vui lòng nhập tiêu đề' }]}
                                        style={{marginLeft: "35%"}}
                                    >
                                        <Input placeholder="Nhập tiêu đề" name="name" onChange={e => setTitle(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name="message"
                                        label="Mô tả"
                                        rules={[{ required: true, message: 'vui lòng nhập mô tả' }]}
                                        style={{marginLeft: "35%"}}
                                    >
                                        <TextArea placeholder="Nhập mô tả" name="message" onChange={e => setMessage(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Button type="primary" htmlType="submit" className="btn-contact" size="large">Gửi</Button>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact