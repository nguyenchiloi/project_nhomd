import { Col, Image, Row } from "antd"
import './news.css'
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const News = () => {
    const [listHotNews, setListHotNews] = useState([]);
    const [listNews, setListNews] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/hot-news`)
            .then(res => {
                const persons = res.data.data;
                setListHotNews(persons)
            })
            .catch(error => console.log(error));
    }, [])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/news`)
            .then(res => {
                const persons = res.data.data;
                setListNews(persons)
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            <div className="news" style={{ textAlign: "center", color: "white", padding: "20px", background: "#2b2b2b", borderBottom: "#9a9a9a solid 1px" }}>
                <h1 style={{ padding: 50, fontSize: 50 }}>Tin Tức Công Nghệ</h1>
                <Row className="hotNews" justify="center" align="top" gutter={[16, 16]}>
                    <Col span={12}>
                        <div className="bor">
                            <div className="fire">🔥Tin Tức Nóng Hổi Về Công Nghệ🔥</div>
                            {listHotNews.map((value, index) => {
                                return (
                                    <Row className="newsdes">
                                        <Col flex={2}>
                                            <div>
                                                <Image className="pic"
                                                    width={200}
                                                    height={144}
                                                    src={`./img/${value.photo}`}
                                                />
                                            </div>
                                        </Col>
                                        <Col flex={3} className="bo">
                                            <div className="newsName">{value.title}</div>
                                        </Col>
                                    </Row>
                                )
                            })}

                        </div>
                        <h1 style={{ textAlign: "left", padding: 10 }}>Tin tức vừa cập nhật</h1>
                        {listNews.map((value) => {
                            const date = moment(value.created_at);
                            return (
                                <div className="bornew">
                                    <Row className="new">
                                        <Col flex={2} style={{ padding: 10 }}>
                                            <div>
                                                <Image style={{ border: "white solid 1px", borderRight: "none" }} className="pic"
                                                    width={200}
                                                    height={144}
                                                    src={`./img/${value.photo}`}
                                                />
                                            </div>
                                        </Col>
                                        <Col flex={3} className="bo" style={{ padding: 10 }}>
                                            <div className="newName">{value.title}</div>
                                            <p className="newsbody">{value.description}</p>
                                            <div className="date">{date.format('DD/MM/yyyy')}</div>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default News;