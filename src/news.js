import { AppstoreOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import './news.css';

const News = () => {
    return (
        <>
            <div className="content">
                <h2><AppstoreOutlined />Tin tức</h2>
                <Row className="contentnews">
                    <Col span={5} offset={6} className="contentframe">
                        <Image src={`./img/b7.png`} width={350} />
                    </Col>
                    <Col span={8} className="contentmain">
                        <h2>Tiêu đề</h2>
                        <div>Mô tả</div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default News;