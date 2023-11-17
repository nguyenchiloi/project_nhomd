import { Col, Image, Row } from "antd"

const About = () => {
    return (
        <>
            <h1 style={{textAlign: "center", color: "red", margin: 50}}>Danh sách thành viên trong công ty công nghệ sài gòn</h1>
            <Row justify='center' gutter={[16, 16]}>
                <Col span={12} style={{textAlign: "center", paddingLeft:340}}>
                    <Image
                        width={200}
                        height={250}
                        src="./img/hinhcualoi.jpg"
                    />
                    <h2>Nguyễn Chí Lợi</h2>
                    <div>20 tuổi</div>
                    <div>Trưởng nhóm</div>
                </Col>
                <Col span={12} style={{textAlign: "center", paddingRight:340}}>
                <Image
                        width={200}
                        height={250}
                        src="./img/hinhthanghuy.png"
                    />
                    <h2>Võ Xuân Huy</h2>
                    <div>20 tuổi</div>
                    <div>Phó nhóm</div>
                </Col>

            </Row>
            <Row justify="center">
                <Col span={8} style={{textAlign: "center"}}>
                <Image
                        width={200}
                        height={250}
                        src="./img/hinhthangphuc.jpg"
                    />
                    <h2>Nguyễn Quang Phục</h2>
                    <div>20 tuổi</div>
                    <div>Thành viên</div>
                </Col>
                <Col span={8} style={{textAlign: "center"}}>
                <Image
                        width={200}
                        height={250}
                        src="./img/hinhthangduy.jpg"
                    />
                    <h2>Lê Thanh Duy</h2>
                    <div>20 tuổi</div>
                    <div>Thành viên</div>
                </Col>
                <Col span={8} style={{textAlign: "center"}}>
                <Image
                        width={200}
                        height={250}
                        src="./img/hinhthangthanh.jpg"
                    />
                    <h2>Lê Đức Thành</h2>
                    <div>20 tuổi</div>
                    <div>Thành viên</div>
                </Col>
            </Row>
        </>
    )
}
export default About