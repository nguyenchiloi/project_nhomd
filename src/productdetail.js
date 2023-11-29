import { Button, Col, Image, Input, Row } from "antd";
import './productdetail.css'
import { CommentOutlined } from "@ant-design/icons";
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
                <div className="comment">
                    <Col span={12}>Nhập câu hỏi tại đây</Col>
                    <div style={{ display: "flex", margin:10}}>
                        <textarea style={{ width: "100%", marginRight: 10, borderRadius:5,padding:10}} type="textarea"></textarea>
                        <Button style={{background:"black",color:"white"}} htmlType="submit" className="btn-contact" size="large">Gửi</Button>
                    </div>
                    <div style={{borderBottom:"white solid 1px" , margin:10}}></div>
                    <div className="list_comment">
                        <div className="nameu">Lê Thanh Duy</div>
                        <div className="contentP">
                            <p>Máy gì mà xịn quá vậy shop, tôi mua 1 lần 10 cái rồi</p>
                            <Button className="repcmtt"><CommentOutlined/>Trả lời</Button>
                        </div>
                    </div>
                    <div className="list_comment">
                        <div className="nameu">Nguyễn Chí Lợi</div>
                        <div className="contentP">
                            <p>Máy tốt, giá mềm, rất phù hợp với điều kiện của tôi</p>
                            <Button className="repcmtt"><CommentOutlined/>Trả lời</Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ProductDetail;