import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";

const BtnReplyContact = ({ _ }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState(_.name);
    const [messageApi, contextHolder] = message.useMessage();
    const [title, setTitle] = useState(_.title);
    const [email, setGmail] = useState(_.email);
    const [messages, setMessage] = useState("");
    const [form] = Form.useForm();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Trả lời liên hệ thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Trả lời liên hệ thất bại',
        });
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {
        if (_) {
            form.setFieldsValue({
                name: _.name,
                email: _.email,
                title: _.title,
            });
        }
    }, [_]);
    const handlesubmit = async () => {
        let message = messages;
        let obj = { name, email, title, message };
        await fetch('http://127.0.0.1:8000/api/admin/contact/reply', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then(res => res.json()).then(data => {
            if (data.success) {
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
            <Button size="large" type="primary" style={{ backgroundColor: "#ff9c00" }} icon={<EditOutlined />} onClick={showModal}>Sửa</Button>
            <Modal
                title="Thêm danh mục"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                onOk={handlesubmit}
            >
                <Form form={form} layout="vertical" onFinish={handlesubmit}>
                    <Row className="d-flex" justify="start" gutter={[0, 15]}>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="name"
                                label="Tên người dùng:"
                                rules={[{ required: true, message: 'vui lòng nhập tên người dùng' }]}
                            >
                                <Input placeholder="Nhập tên người dùng" name="name" onChange={e => setName(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập email",
                                },
                                {
                                    pattern: "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                                    message: "Email không hợp lệ",
                                },
                            ]} name="email" label="Email">
                                <Input size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} name="email" value={email} onChange={e => setGmail(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name="title"
                                        label="Tiêu đề:"
                                        rules={[{ required: true, message: 'vui lòng nhập tiêu đề' }]}
                                    >
                                        <Input placeholder="Nhập tiêu đề" name="title" onChange={e => setTitle(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        name="message"
                                        label="Trả lời"
                                        rules={[{ required: true, message: 'vui lòng nhập trả lời' }]}
                                    >
                                        <TextArea placeholder="Nhập câu trả lời" name="message" onChange={e => setMessage(e.target.value)} />
                                    </Form.Item>
                                </Col>

                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default BtnReplyContact;