import { Button, Col, Image, Row } from "antd";
import './productdetail.css'
const ProductDetail = () => {
    return (
        <>
            <div className="content">
                <Row>
                    <Col span={10}>
                        <Image src="./img/b1.png" width={500} />
                    </Col>
                    <Col span={12}>
                        <h1>Tên sản phẩm</h1>
                        <div className="money">Giá bán: 1235645 $</div>
                        <div className="description">Mô tả: adasdasd ducwdweeqwdcq qưdqw  qưewqdqwds</div>
                        <div className="promotion">
                            <h3>Khuyễn mãi - Đại hạ giá
                                <p>Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 30/12</p>

                            </h3>
                            <ul>
                                <li> Vòng quay may mắn: Giảm thêm 50.000₫ đến 200.000₫</li>
                                <li> Thu cũ Đổi mới: Giảm đến 2 triệu (Tuỳ model máy cũ, Không kèm thanh toán qua cổng online, mua kèm)</li>
                                <li>Hoàn tiền nếu ở đâu rẻ hơn (Trong vòng 7 ngày; chỉ áp dụng tại siêu thị)</li>
                                <li>Hư gì đổi nấy 12 tháng tại 3308 siêu thị trên toàn quốc</li>
                                <li>Bảo hành chính hãng 1 năm</li>
                            </ul>
                        </div>
                        <div className="promotionhssv">
                            <h3>Giảm thêm hàng triệu đồng</h3>
                            <div className="hssv">Đối với học sinh, sinh viên, giáo viên</div>
                            <button>Mua ngay</button>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}
export default ProductDetail;