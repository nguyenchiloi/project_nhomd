import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";

const BtnReplyContact = ({ _, contactsapi }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState(_.name);
    const [messageApi, contextHolder] = message.useMessage();
    const [title, setTitle] = useState(_.title);
    const [email, setGmail] = useState(_.email);
    const [messages, setMessage] = useState();
    const description = useState(_.message);
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
                contactsapi();
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
            <Button size="large" type="primary" style={{ backgroundColor: "#ff9c00" }} icon={<EditOutlined />} onClick={showModal}>Trả lời</Button>
            <Modal
                title="Trả lời liên hệ"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                onOk={handlesubmit}
            >
                <Form form={form} layout="vertical" onFinish={handlesubmit}>
                    <Row className="d-flex" justify="start" gutter={[0, 15]}>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <label>Tên người dùng: {name}</label>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <label>Email: {email}</label>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <label>Tiêu đề liên hệ: {title}</label>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <label>Nội dung: {description}</label>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="message"
                                label="Trả lời"
                                rules={[{ required: true, message: 'vui lòng nhập trả lời' }]}
                            >
                                <TextArea maxLength={500} placeholder="Nhập câu trả lời"  onChange={e => setMessage(e.target.value)} />
                            </Form.Item>
                        </Col>

                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default BtnReplyContact;