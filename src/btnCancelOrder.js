import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popover, Space, message } from "antd";


const BtnCancelOrder = ({ user, order_id,orderapi }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message :'Hủy đơn hàng thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Hủy đơn hàng thất bại',
        });
    };
    const onsubmitDelete = () => {
        let user_id = user.user.id;
        fetch(`http://127.0.0.1:8000/api/global/cancel/${order_id}`, {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({user_id})
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                orderapi();
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
            <Popover
                content={
                    <div>
                        Chọn xác nhận hủy đơn hàng này!
                        <Space className="d-flex justify-content-flex-end mt-1">
                            <Button style={{ marginTop: 20 }} type="primary" onClick={onsubmitDelete}>Xác nhận</Button>
                        </Space>
                    </div>
                }
                trigger="click"
                placement="topRight"
            >
                <Button
                    size="large" type="primary" danger
                ><DeleteOutlined />Hủy đơn hàng</Button>
            </Popover>
        </>
    );
}
export default BtnCancelOrder;