import { Col, Image, Row } from "antd"
import './showroom.css'
import { bottom } from "@popperjs/core"
const showroom = () => {
    return (
        <>
            <div className="showroom" style={{ textAlign: "center", color: "#bbb4aa", padding: "20px 50px 80px 50px", background: "#423f3e", borderBottom: "#9a9a9a solid 1px" }}>
                <h1 style={{ padding: 50, fontSize: 50 }}>Hệ thống Showroom TP.HCM</h1>
                    <Row className="sr-space" justify='center' gutter={[16, 16]}>
                        <Col style={{ textAlign: 'left', paddingLeft: 30 }} span={8} offset={4}>
                            <div className="srName">Chi nhánh Cà Mau</div>
                            <h4>Thời gian làm việc: 8:00 - 21:00 | Thứ 2 - Chủ Nhật</h4>
                            <div className="address">Địa chỉ: 56 Võ Văn Ngân, TP.Thủ Đức, TP.HCM </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <Image className="pic"
                                    width={500}
                                    height={400}
                                    src="./img/hinhcualoi.jpg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="sr-space" justify='center' gutter={[16, 16]}>
                        <Col style={{ textAlign: 'left', paddingLeft: 30 }} span={8} offset={4}>
                            <div className="srName">Chi nhánh Cẩm Mỹ</div>
                            <h4>Thời gian làm việc: 8:00 - 21:00 | Thứ 2 - Chủ Nhật</h4>
                            <div className="address">Địa chỉ: 15 Cẩm Mỹ, Đồng Nai, TP.HCM </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <Image className="pic"
                                    width={500}
                                    height={400}
                                    src="./img/hinhthanghuy.png"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="sr-space" justify='center' gutter={[16, 16]}>
                        <Col style={{ textAlign: 'left', paddingLeft: 30 }} span={8} offset={4}>
                            <div className="srName">Chi nhánh Thủ Đức</div>
                            <h4>Thời gian làm việc: 8:00 - 21:00 | Thứ 2 - Chủ Nhật</h4>
                            <div className="address">Địa chỉ: 3 Lê Văn Việt, TP.Thủ Đức, TP.HCM </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <Image className="pic"
                                    width={500}
                                    height={400}
                                    src="./img/hinhthangduy.jpg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="sr-space" justify='center' gutter={[16, 16]}>
                        <Col style={{ textAlign: 'left', paddingLeft: 30 }} span={8} offset={4}>
                            <div className="srName">Chi nhánh Xuân Tâm</div>
                            <h4>Thời gian làm việc: 8:00 - 21:00 | Thứ 2 - Chủ Nhật</h4>
                            <div className="address">Địa chỉ: 9 Xuân Tâm, Xuân Lộc, Đồng Nai, TP.HCM </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <Image className="pic"
                                    width={500}
                                    height={400}
                                    src="./img/hinhthangphuc.jpg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="sr-space" justify='center' gutter={[16, 16]}>
                        <Col style={{ textAlign: 'left', paddingLeft: 30 }} span={8} offset={4}>
                            <div className="srName">Chi nhánh Bến Cát</div>
                            <h4>Thời gian làm việc: 8:00 - 21:00 | Thứ 2 - Chủ Nhật</h4>
                            <div className="address">Địa chỉ: 13 phường Mỹ Phước, Bến Cát, Bình Dương </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <Image className="pic"
                                    width={500}
                                    height={400}
                                    src="/img/hinhthangthanh.jpg"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
        </>
    )
}
export default showroom