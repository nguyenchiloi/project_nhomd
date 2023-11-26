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
        </>
    )
}
export default News;