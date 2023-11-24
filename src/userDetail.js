import { Card, Col, Row } from 'antd';
import './userDetail.css'

const UserDetail = () => {
    return (
        <div class="tong">
            <Card
                title="Thông tin người dùng"
                bordered={false}
                style={{
                    width: 500,
                    height: 600
                }}
            >
                <p>Tên người dùng: lợi</p>
                <p>Email: loi@gmail.com</p>
                <p>Phone: 01234567899</p>
            </Card>
        </div>
    )
}
export default UserDetail;