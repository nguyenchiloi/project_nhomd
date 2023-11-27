import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, Modal, Row, message } from "antd";
import { useState } from "react";

const Pay = ({ user, listCart }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [address, setAddress] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Thanh toán thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Thanh toán thất bại',
        });
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handlesubmit = async () => {
        let user_id = user.id;
        await fetch('http://127.0.0.1:8000/api/payment', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, address })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                setIsModalVisible(false);
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
            <Button type="primary" className="checkout" icon={<PlusCircleOutlined />} onClick={showModal} size="large" style={{ background: "green" }}>Thanh toán</Button>
            <Modal
                title="Thanh toán"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                onOk={handlesubmit}
            >
                <Form form={form} layout="vertical" onFinish={handlesubmit}>
                    <Row className="d-flex" justify="start" gutter={[0, 15]}>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <div>Tên người dùng: {user.name}</div>
                            <div>Email: {user.email}</div>
                            <div>Số điện thoại: {user.phone}</div>
                        </Col>
                        {listCart.map((value, index) => {
                            return (
                                <Col xl={24} lg={24} md={24} sm={24} xs={24} id={index.id}>
                                    <Row>
                                        <Col span={6}>
                                            <Image src={`./img/${value.photo}`} width={100} height={100} />
                                        </Col>
                                        <Col span={18}>
                                            <h5>{value.product_name}</h5>
                                            <div>Số lượng: {value.quantity}</div>
                                            <div>Tổng tiền: {value.product_price * value.quantity} $</div>
                                        </Col>
                                    </Row>
                                </Col>

                            )
                        })}
                        <div style={{ textAlign: "center"}}>Tổng tiền: {listCart.reduce((money, item) => money + item.quantity * item.product_price, 0)} $</div>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="address"
                                label="Địa chỉ nhận hàng:"
                                rules={[{ required: true, message: 'vui lòng nhập địa chỉ' }]}
                            >
                                <Input placeholder="Nhập địa chỉ" name="address" onChange={e => setAddress(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <div style={{ textAlign: "center", opacity: 0.4 }}>Nhận hàng khi thanh toán</div>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default Pay;