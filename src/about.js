import { Col, Image, Row } from "antd"

const About = () => {
    return (
        <>
            <h1>ngon bo re</h1>
            <Row justify="center" >
                <Col span={12}>
                    {/* <Image 
                        width={100}
                        src="./img/b1.png"
                    /> */}
                    <div style={{ textAlign: "center" }}>
                        <div>
                            Nguyễn Chí Lợi <br></br>
                            Nhóm trưởng
                        </div>
                    </div>
                </Col>

                <Col span={12}>
                    {/* <Image
                        width={200}
                        src="./img/b1.png"
                    /> */}
                    <div style={{ textAlign: "center" }}>
                        <div>
                            Võ Xuân Huy <br></br>
                            Nhóm phó
                        </div>
                    </div>
                </Col>


            </Row>
            <Row justify="center">
                <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                        <div>
                            Nguyễn Quang Phục <br></br>
                            Thành viên
                        </div>
                    </div>
                </Col>

                <Col span={8}>
                <div style={{ textAlign: "center" }}>
                        <div>
                            Lê Thanh Duy <br></br>
                            Thành viên
                        </div>
                    </div>
                </Col>

                <Col span={8}>
                <div style={{ textAlign: "center" }}>
                        <div>
                            Lê Đức Thành <br></br>
                            Thành viên
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default About