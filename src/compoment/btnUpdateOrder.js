import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import { useEffect, useState } from "react";

const BtnUpdateOrder = ({ _, id, oderapi }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [status, setStatus] = useState(_.status);
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
                status: _.status
            });
        }
    }, [_]);
    const handlesubmit = async () => {
        await fetch(`http://127.0.0.1:8000/api/admin/update-order/${id}`, {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ status })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                setIsModalVisible(false);
                oderapi();
            } else {
                error(data.message);
            }
        }).catch((err) => {
            error();
        })
    }
    const handleChangeUser = (value) => {
        setStatus(value);
    };
    return (
        <>
            {contextHolder}
            <Button size="large" type="primary" style={{ backgroundColor: "#ff9c00" }} icon={<EditOutlined />} onClick={showModal}>Cập nhật đơn hàng</Button>
            <Modal
                title="Cập nhật đơn hàng"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                onOk={handlesubmit}
            >
                <Form form={form} layout="vertical" onFinish={handlesubmit}>
                    <Row className="d-flex" justify="start" gutter={[0, 15]}>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn cập nhật đơn hàng",
                                }
                            ]} name="status" title="Trạng thái đơn hàng">
                                <Select
                                    style={{ width: 470 }}
                                    onChange={handleChangeUser}
                                    options={[
                                        { value: 0, label: 'Hủy đơn hàng' },
                                        { value: 1, label: 'Chờ xác nhận' },
                                        { value: 2, label: 'Đang vận chuyển' },
                                        { value: 3, label: 'Đã nhận hàng' },]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default BtnUpdateOrder;