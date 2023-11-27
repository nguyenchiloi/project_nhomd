import { Col, Image, Row } from "antd"
import './showroom.css'
import { bottom } from "@popperjs/core"
import { useEffect, useState } from "react"
import axios from "axios"
const Showroom = () => {
    const [listShowroom, setListShowroom] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/showroom`)
            .then(res => {
                const persons = res.data.data;
                setListShowroom(persons)
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            <div className="showroom" style={{ textAlign: "center", color: "white", padding: "20px 50px 80px 50px", background: "#2b2b2b", borderBottom: "#9a9a9a solid 1px" }}>
                <h1 style={{ padding: 50, fontSize: 50 }}>Hệ thống Showroom TP.HCM</h1>

                {
                    listShowroom.map((value, index) => {
                        return (
                            <>
                                <Row className="sr-space" justify='center' gutter={[16, 16]}>
                                    <Col style={{ textAlign: 'left', paddingLeft: 30 }} span={8} offset={4}>
                                        <div className="srName">{value.name}</div>
                                        <h4>Thời gian làm việc: {value.time}</h4>
                                        <div className="address">Địa chỉ: {value.address} </div>
                                        <iframe src={value.map} width="568.328" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </Col>
                                    <Col span={12}>
                                        <div>
                                            <Image className="pic"
                                                width={700}
                                                height={450}
                                                src={`./img/${value.photo}`}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        )
                    })}

            </div>
        </>
    )
}
export default Showroom