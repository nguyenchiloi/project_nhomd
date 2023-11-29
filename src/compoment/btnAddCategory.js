import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, message } from "antd";
import { useState } from "react";

const BtnAddCategory = ({ categoryapi }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setNameCategory] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Thêm danh mục thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Thêm danh mục thất bại',
        });
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handlesubmit = async () => {
        await fetch('http://127.0.0.1:8000/api/admin/categories/add-category', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({name})
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                setIsModalVisible(false);
                categoryapi();
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
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal} size="large" style={{ background: "green", marginLeft: 20 }}>Thêm</Button>
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
                                label="Tên danh mục:"
                                rules={[{ required: true, message: 'vui lòng nhập tên danh mục' }]}
                            >
                                <Input maxLength={50} placeholder="Nhập tên danh mục" name="name" onChange={e => setNameCategory(e.target.value)} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default BtnAddCategory;