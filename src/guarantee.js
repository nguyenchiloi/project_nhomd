import { Col, Image, Row } from "antd"
import './guarantee.css'
const Guarantee = () => {
    return (
        <>
            <div className="guarantee" style={{ color: "white", background: "#2b2b2b" }}>
                <h1 style={{ textAlign: "center" }}>Chính sách bảo hành tại Công Nghệ Sài Gòn</h1>
                <h3 style={{ color: "#f37777", marginLeft: "10px" }}>I. CÁC BƯỚC BẢO HÀNH SẢN PHẨM</h3>
                <div className="fullStep">
                    <div className="buoc1">
                        <div className="step1"> Bước 1 </div>
                        <div className="content-step1"> Khi có nhu cầu bảo hành sản phẩm, khách hàng vui lòng liên hệ với Công Nghệ Sài Gòn qua các hình thức sau:
                            <ul>
                                <li> <span className="inDam">Trò chuyện trực tiếp</span> với Công Nghệ Sài Gòn tại Website hoặc Fanpage.</li>
                                <li> <span className="inDam">Liên hệ trực tiếp</span> tại chi nhánh cửa hàng.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="buoc2">
                        <div className="step2"> Bước 2 </div>
                        <div className="content-step2">
                            - Quý khách hàng gửi hoặc mang sản phẩm cần bảo hành đến: <br></br>
                            <span className="inDam">Khách hàng tại TP.Hồ Chí Minh</span> gửi sản phẩm trực tiếp tại các showroom/chi nhánh gần nhất. <br></br>
                            * Nhân viên Công Nghệ Sài Gòn tiếp nhận thông tin & phản hồi thời gian xử lí với khách hàng theo chính sách của từng sản phẩm. <br></br>
                            * Quý khách vui lòng liên hệ nhân viên tư vấn trước khi gửi hàng để được hổ trợ cũng như tránh thất thoát hàng hóa.
                        </div>
                    </div>

                    <div className="buoc3">
                        <div className="step3"> Bước 3 </div>
                        <div className="content-step3">
                            Hoàn tất xử lí bảo hành & bàn giao sản phẩm đến khách hàng.
                        </div>
                    </div>
                </div>

                <h3 style={{ color: "#f37777", marginLeft: "10px", marginTop: "25px" }}>II. ĐIỀU KIỆN ĐỂ BẢO HÀNH SẢN PHẨM</h3>
                <div className="dkbh">
                    <Row>
                        <Col span={6} style={{ borderRight: "1px solid red" }}>
                            <div className="vuong"></div>
                            <p className="title-dkbh">
                                NHỮNG SẢN PHẨM ĐỦ ĐIỀU KIỆN BẢO HÀNH
                            </p>
                        </Col>
                        <Col span={18}>
                            <div className="content-dkbh">
                                <ul>
                                    <li>
                                        Sản phẩm nếu có tem niêm phong(seal) trên sản phẩm thì tem niêm phong phải còn nguyên vẹn.
                                    </li>
                                    <li>
                                        Đối với sản phẩm bảo hành trên hộp: sản phẩm phải còn đầy đủ hộp.
                                    </li>
                                    <li>
                                        Sản phẩm không trầy xước, cấn móp, bể, vỡ, biến dạng so với ban đầu.
                                    </li>
                                    <li>
                                        Dữ liệu (lưu trữ trong sản phẩm: Laptop/ Máy tính để bàn/ Thẻ nhớ/ Ổ cứng…) không thuộc phạm vi bảo hành. Chúng tôi hoàn toàn ý thức được tầm quan trọng của dữ liệu của quý khách hàng và luôn cố gắng hết sức để hỗ trợ - hướng dẫn quý khách hàng trong việc sao lưu dữ liệu. Công Nghệ Sài Gòn không chịu trách nhiệm về bất cứ thiệt hại trực tiếp hoặc gián tiếp nào gây ra cho quý khách hàng nếu dữ liệu lưu trong sản phẩm bị tiết lộ, bị mất, bị hư hỏng trong quá trình kiểm tra, xử lý bảo hành.
                                    </li>
                                    <li>
                                        Đối với màn hình Laptop và màn hình rời, lỗi điểm chết màn hình là khi màn hình có từ 5 điểm chết trở lên (riêng với Laptop Ideapad là trên 6 điểm)
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col span={6} style={{ borderTop: "1px solid red", borderRight: "1px solid red" }}>
                            <p className="title-dkbh">
                                NHỮNG SẢN PHẨM KHÔNG ĐỦ ĐIỀU KIỆN BẢO HÀNH
                            </p>
                        </Col>
                        <Col span={18} style={{ borderTop: "1px solid red" }}>
                            <div className="content-dkbh">
                                <ul>
                                    <li>
                                        Hết thời hạn bảo hành.
                                    </li>
                                    <li>
                                        Không có tem niêm phong, hoặc bị tẩy xóa, không còn nguyên dạng ban đầu.
                                    </li>
                                    <li>
                                        Bị tác động vật lý làm trầy xước, cong vênh, rạn nứt, bể vỡ trong quá trình quá trình sử dụng.
                                    </li>
                                    <li>
                                        Bị hư hỏng do tự ý thảo mở, sửa chữa, thay đổi cấu trúc sản phẩm bên trong mà chưa có sự xác nhận đồng ý hoặc giám sát bởi kỹ thuật viên Công Nghệ Sài Gòn.
                                    </li>
                                    <li>
                                        Bị hư hỏng, chập, cháy do sử dụng sai mục đích, tự ý tháo, lắp đặt không tuân theo các hướng dẫn sử dụng đính kèm theo sản phẩm.
                                    </li>
                                    <li>
                                        Bị hư hỏng do côn trùng xâm nhập (chuột, gián, kiến, mối…)
                                    </li>
                                    <li>
                                        Bị hư hỏng do thiên tai, hỏa hoạn, lụt lội, sét đánh, rỉ sét, hao mòn do môi trường gây ra.
                                    </li>
                                </ul>
                                <p className="inDam">Công Nghệ Sài Gòn hỗ trợ tiếp nhận & sửa chữa sản phẩm (Có thu phí đối với khách hàng) với những sản phẩm không đủ điều kiện bảo hành.</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <h3 style={{ color: "#f37777", marginLeft: "10px", marginTop: "20px" }}>III. CHÍNH SÁCH BẢO HÀNH CHUNG</h3>
                <h4 style={{ color: "#f37777", marginLeft: "25px" }}>1. Chính sách đổi mới 100%</h4>
                <div className="doiMoi">
                    <Row>
                        <Col span={6}>
                            <div className="title-doiMoi">
                                <p>ĐIỀU KIỆN SẢN PHẨM ĐƯỢC ÁP DỤNG ĐỔI MỚI 100%</p>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className="content-doiMoi">
                                <ul>
                                    <li>
                                        Sản phẩm có tem niêm phong (seal) còn nguyên vẹn.
                                    </li>
                                    <li>
                                        Sản phẩm không trầy xước, còn đầy đủ hộp, sách và phụ kiện.
                                    </li>
                                    <li>
                                        Hộp sản phẩm còn nguyên vẹn, không để rách, nát, biến dạng.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>

                <h4 style={{ color: "#f37777", marginLeft: "25px" }}>2. Thời gian xử lý đối với bảo hành sản phẩm</h4>
                <Row>
                    <Col span={6}>
                        <div className="title-tgxl">
                            <p className="inDam">A. Lỗi do nhà sản xuất</p>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="content-tgxl">
                            Nhân viên kĩ thuật - bảo hành Công Nghệ Sài Gòn tiến hành kiểm tra ngay thời điểm tiếp nhận sản phẩm bảo hành:
                            <ul>
                                <li>
                                    Phát hiện ra lỗi:
                                </li>
                            </ul>
                            Công Nghệ Sài Gòn tiến hành xử lý bảo hành theo chính sách bảo hành của sản phẩm.
                            <ul>
                                <li>
                                    Chưa phát hiện ra lỗi:
                                </li>
                            </ul>
                            Công Nghệ Sài Gòn có thể giữ lại sản phẩm để tiếp tục kiểm tra trong vòng 3 ngày làm việc nếu có yêu cầu kiểm tra của khách hàng(không bao gồm thứ 7, Chủ Nhật & các ngày Lễ, Tết).
                            Sau 3 ngày kiểm tra vẫn chưa phát hiện được lỗi của sản phẩm, Công Nghệ Sài Gòn xin phép hoàn trả lại sản phẩm đến quý khách.
                        </div>
                    </Col>

                    <Col span={6}>
                        <div className="title-tgxl">
                            <p className="inDam">B. Lỗi do người dùng</p>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="content-tgxl">
                            Công Nghệ Sài Gòn từ chối bảo hành các sản phẩm lỗi phát sinh do người sử dụng.
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Guarantee;