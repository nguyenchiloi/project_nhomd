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
        </>
    )
}
export default News;