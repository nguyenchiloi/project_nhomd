import { Button, Modal, Rate, message } from "antd";
import axios from "axios";
import { useState } from "react";

const BtnRate = ({ user, product_id, starapi }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [stars, setStart] = useState(0);
    const [messageApi, contextHolder] = message.useMessage();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Đánh giá thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Đánh giá thất bại',
        });
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handlesubmit = () => {
        let user_id = user.id;
        fetch(`http://127.0.0.1:8000/api/ratings`, {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id, stars })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                setIsModalVisible(false);
                starapi();
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
            <Button size="large" type="primary" style={{ backgroundColor: "#ff9c00", marginBottom: 20 }} onClick={showModal}>Đánh giá cho sản phẩm</Button>
            <Modal
                title="Đánh giá sản phẩm"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                onOk={handlesubmit}
            >
                <Rate onChange={setStart} value={stars} />
            </Modal>
        </>
    )
}
export default BtnRate;