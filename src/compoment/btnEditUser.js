import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import { useEffect, useState } from "react";

const BtnEditUser = ({ _, id, usersapi }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setNameCategory] = useState(_.name);
    const [messageApi, contextHolder] = message.useMessage();
    const [type, setType] = useState(_.type);
    const [email, setGmail] = useState(_.email);
    const [phone, setPhone] = useState(_.phone);
    const [form] = Form.useForm();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Sửa quyền user thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Sửa quyền user thất bại',
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
                phone: _.phone,
                type: _.type,
            });
        }
    }, [_]);
    const handlesubmit = async () => {
        await fetch(`http://127.0.0.1:8000/api/admin/users/update/${id}`, {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, type })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                setIsModalVisible(false);
                usersapi();
                form.resetFields();
            } else {
                error(data.message);
            }
        }).catch((err) => {
            error();
        })
    }
    const handleChangeUser = (value) => {
        setType(value);
    };
    return (
        <>
            {contextHolder}
            <Button size="large" type="primary" style={{ backgroundColor: "#ff9c00" }} icon={<EditOutlined />} onClick={showModal}>Sửa</Button>
            <Modal
                title="Sửa thông tin người dùng"
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
                                label="Tên danh mục:"
                                rules={[{ required: true, message: 'vui lòng nhập tên danh mục' }]}
                            >
                                <Input maxLength={50} placeholder="Nhập tên danh mục" name="name" onChange={e => setNameCategory(e.target.value)} />
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
                            ]} name="email" >
                                <Input maxLength={100} size="large" placeholder="Nhập gmail" prefix={<UserOutlined />} name="email" value={email} onChange={e => setGmail(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
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
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn quyền cho người dùng",
                                }
                            ]} name="type">
                                <Select
                                    style={{ width: 470 }}
                                    onChange={handleChangeUser}
                                    options={[
                                        { value: 1, label: 'admin' },
                                        { value: 2, label: 'user' },]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default BtnEditUser;