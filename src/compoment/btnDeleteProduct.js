import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popover, Space, message } from "antd";


const BtnDeleteProduct = ({ id, productapi }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Xóa sản phẩm thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Xóa sản phẩm thất bại',
        });
    };
    const onsubmitDelete = () => {
        fetch(`http://127.0.0.1:8000/api/admin/products/delete/${id}`, {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                productapi();
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
                        Chọn xác nhận để xoá sản phẩm này!
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
                ><DeleteOutlined />Xóa</Button>
            </Popover>
        </>
    );
}
export default BtnDeleteProduct;