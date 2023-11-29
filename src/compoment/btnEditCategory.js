import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, message } from "antd";
import { useEffect, useState } from "react";

const BtnEditCategory = ({_,id, categoryapi }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setNameCategory] = useState(_.name);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message :'Sửa danh mục thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Sửa danh mục thất bại',
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
            });
        }
    }, [_]);
    const handlesubmit = async () => {
        await fetch(`http://127.0.0.1:8000/api/admin/categories/update/${id}`, {
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
export default BtnEditCategory;