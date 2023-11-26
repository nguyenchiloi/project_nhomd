<<<<<<< HEAD
import { Col, Image, Row } from "antd"
import './news.css'
const News = () => {
    return (
        <>
            <div className="news" style={{ textAlign: "center", color: "white", padding: "20px 50px 80px 50px", background: "#2b2b2b", borderBottom: "#9a9a9a solid 1px" }}>
                <h1 style={{ padding: 50, fontSize: 50 }}>Tin Tức Công Nghệ</h1>
                <Row className="hotNews" justify="center" align="top" gutter={[16, 16]}>
                    <Col span={12}>
                        <div className="bor">
                            <div className="fire">🔥Tin Tức Nóng Hổi Về Công Nghệ🔥</div>
                            <Row className="newsdes">
                                <Col flex={2}>
                                    <div>
                                        <Image className="pic"
                                            width={200}
                                            height={144}
                                            src={`./img/hinhcualoi.jpg`}
                                        />
                                    </div>
                                </Col>
                                <Col flex={3} className="bo">
                                    <div className="newsName">Thành viên nhóm hại nhóm phó chơi đá trong lớp học</div>
                                </Col>
                            </Row>
                            <Row className="newsdes">
                                <Col flex={2}>
                                    <div>
                                        <Image className="pic"
                                            width={200}
                                            height={144}
                                            src={`./img/hinhcualoi.jpg`}
                                        />
                                    </div>
                                </Col>
                                <Col flex={3} className="bo">
                                    <div className="newsName">Thành viên nhóm hại nhóm phó chơi đá trong lớp học</div>
                                </Col>
                            </Row>
                        </div>
                        <h1 style={{ textAlign: "left", padding: 10 }}>Tin tức vừa cập nhật</h1>
                        <div className="bornew">
                            <Row className="new">
                                <Col flex={2}>
                                    <div>
                                        <Image style={{border:"white solid 1px",borderRight:"none"}} className="pic"
                                            width="100%"
                                            height={144}
                                            src={`./img/hinhcualoi.jpg`}
                                        />
                                    </div>
                                </Col>
                                <Col flex={3} className="bo" style={{padding:10}}>
                                    <div className="newName">Thành viên nhóm hại nhóm phó chơi đá trong lớp học</div>
                                    <p className="newsbody">chìn chá? ịn chá nạ!</p>
                                    <div className="date">25/11/2023</div>
                                </Col>
                            </Row>
                        </div>
                        <div className="bornew">
                            <Row className="new">
                                <Col flex={2}>
                                    <div>
                                        <Image style={{border:"white solid 1px",borderRight:"none"}} className="pic"
                                            width="100%"
                                            height={144}
                                            src={`./img/hinhcualoi.jpg`}
                                        />
                                    </div>
                                </Col>
                                <Col flex={3} className="bo" style={{padding:10}}>
                                    <div className="newName">Thành viên nhóm hại nhóm phó chơi đá trong lớp học</div>
                                    <p className="newsbody">chìn chá? ịn chá nạ!</p>
                                    <div className="date">24/11/2023</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
=======
import { AppstoreOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";


const News = () => {
    return (
        <>
            <h2><AppstoreOutlined /> Tin tức</h2>
            <Row>
                <Col span={6} offset={6}>
                    <Image src={`./img/b2.png`} width={350} />
                </Col>
                <Col span={10}>Smartphone toàn cầu tăng trưởng trở lại
                    Sau hai năm sụt giảm liên tiếp so với cùng kỳ, sản lượng smartphone tăng trưởng trở lại trong tháng 10 nhờ sự phục hồi ở thị trường mới nổi.

                    Thị trường smartphone toàn cầu trải qua giai đoạn sụt giảm kéo dài tính từ tháng 6/2021. Trong hơn hai năm, chỉ có một nhà sản xuất lớn là Xiaomi tăng số lượng điện thoại xuất xưởng so với cùng kỳ năm trước. Tuy nhiên, thị trường đang khởi sắc trở lại.</Col>
            </Row>
>>>>>>> ab77dfc73faa81c7d899180190b3408de31dc1af
        </>
    )
}
export default News;