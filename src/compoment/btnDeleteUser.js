import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popover, Space, message } from "antd";


const BtnDeleteUser = ({ id, usersapi }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Xóa user thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Xóa user thất bại',
        });
    };
    const onsubmitDelete = () => {
        fetch(`http://127.0.0.1:8000/api/admin/users/delete/${id}`, {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                usersapi();
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
                        Chọn xác nhận để xoá user này!
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
export default BtnDeleteUser;