import { Col, Image, Row } from "antd"

const About = () => {
    return (
        <>
            <h1>ngon bo re</h1>
            <Row justify="center" >
                <Col span={12} offset={11}>
                    <Image
                        width={200}
                        src="./img/b1.png"
                    />
                    <div style={{textAlign: "center"}}>Nguyen Chi Loi</div>
                </Col>
                <Col span={12}>huy</Col>

            </Row>
            <Row justify="center">
                <Col span={8}>phuc</Col>
                <Col span={8}>duy</Col>
                <Col span={8}>thanh</Col>
            </Row>
        </>
    )
}
export default About