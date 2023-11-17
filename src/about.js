import { HomeOutlined } from "@ant-design/icons"
import { Col, Image, Row } from "antd"

const About = () => {
    return (
        <>
            <div style = {{textAlign: "center", color: "#bbb4aa", padding: "20px 50px 80px 50px", background: "#423f3e", borderBottom:"#9a9a9a solid 1px"}}>
            <h2 id="about" style={{ position:"absolute",padding:"20px 30px",color: "#bbb4aa", background: "#423f3e", fontSize: 42, textTransform:"uppercase", fontWeight:"300" }}><HomeOutlined/> Về chúng tôi</h2>
                <h1 style={{padding: 50}}>Danh sách thành viên trong công ty công nghệ sài gòn</h1>
                <Row justify='center' gutter={[16, 16]}>
                    <Col span={12} style={{ paddingLeft: 340, fontSize: "20px" }}>
                        <Image
                            width={300}
                            height={300}
                            src="./img/hinhcualoi.jpg"
                        />
                        <h2>Nguyễn Chí Lợi</h2>
                        <div>20 tuổi</div>
                        <div>Trưởng nhóm</div>
                    </Col>
                    <Col span={12} style={{ paddingRight: 340, fontSize: "20px" }}>
                        <Image
                            width={300}
                            height={300}
                            src="./img/hinhthanghuy.png"
                        />
                        <h2>Võ Xuân Huy</h2>
                        <div>20 tuổi</div>
                        <div>Phó nhóm</div>
                    </Col>

                </Row>
                <Row justify="center">
                    <Col span={8} style={{ fontSize: "20px" }}>
                        <Image
                            width={300}
                            height={300}
                            src="./img/hinhthangphuc.jpg"
                        />
                        <h2>Nguyễn Quang Phục</h2>
                        <div>20 tuổi</div>
                        <div>Thành viên</div>
                    </Col>
                    <Col span={8} style={{ fontSize: "20px" }}>
                        <Image
                            width={300}
                            height={300}
                            src="./img/hinhthangduy.jpg"
                        />
                        <h2>Lê Thanh Duy</h2>
                        <div>20 tuổi</div>
                        <div>Thành viên</div>
                    </Col>
                    <Col span={8} style={{ fontSize: "20px" }}>
                        <Image
                            width={300}
                            height={300}
                            src="./img/hinhthangthanh.jpg"
                        />
                        <h2>Lê Đức Thành</h2>
                        <div>20 tuổi</div>
                        <div>Thành viên</div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default About