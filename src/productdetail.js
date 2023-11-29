import { Button, Col, Image, Rate, Row, message } from "antd";
import './productdetail.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import BtnRate from "./btnRate";
const ProductDetail = ({ user }) => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [comment, setComment] = useState("");
    const usenavigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Bình luận thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Bình luận thất bại',
        });
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => {
                const persons = res.data;
                setProduct(persons);
            })
            .catch(error => console.log(error));
    }, []);
    let moneylen = product.money + 1000;
    const [listcomment, setListComment] = useState([]);
    const commentapi = () => {
        axios.get(`http://127.0.0.1:8000/api/global/getAllComment/${id}`)
            .then(res => {
                const persons = res.data.data;
                setListComment(persons);
            })
            .catch(error => console.log(error));
    }
    const [star, setStar] = useState([]);
    const starapi = () => {
        axios.get(`http://127.0.0.1:8000/api/getAllRating/${id}`)
            .then(res => {
                const persons = res.data.data;
                setStar(persons);
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        commentapi();
        starapi();
    }, []);
    const handlesubmitcomment = () => {
        let user_id = user.id;
        let product_id = id;
        fetch('http://127.0.0.1:8000/api/global/comment/', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id, comment })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                commentapi();
            } else {
                error(data.message);
            }
        }).catch((err) => {
            error();
        })
    }
    const addtocart = () => {
        if(!user.id && !localStorage.getItem('token')){
            usenavigate('/login');
        }
        let user_id = user.id;
        let product_id = product.id;
        let money = product.money;
        let quantity = 1;
        fetch('http://127.0.0.1:8000/api/add-to-cart', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id, money, quantity })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
            } else {
                error(data.message);
            }
        }).catch((err) => {
            error();
        })
    }
    return (
        <>
            {contextHolder}
            <div className="content">
                <Row>
                    <Col span={9}>
                        <Image src={`/img/${product.photo}`} width={500} height={500}/>
                    </Col>
                    <Col span={12}>
                        <h1>{product.name}</h1>
                        <div className="money">Giá bán: {product.money} $ - <span>{moneylen} $</span></div>
                        <div className="description">Mô tả: {product.description}</div>
                        <Button type="primary" size="large" style={{marginTop: 10, background: "black"}} onClick={()=>addtocart()}>Thêm vào giỏ hàng</Button>
                        <div className="promotion">
                            <h3>Khuyễn mãi - Đại hạ giá
                                <p>Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 30/12</p>

                            </h3>
                            <ul>
                                <li> Vòng quay may mắn: Giảm thêm 50.000₫ đến 200.000₫</li>
                                <li> Thu cũ Đổi mới: Giảm đến 2 triệu (Tuỳ model máy cũ, Không kèm thanh toán qua cổng online, mua kèm)</li>
                                <li>Hoàn tiền nếu ở đâu rẻ hơn (Trong vòng 7 ngày; chỉ áp dụng tại siêu thị)</li>
                                <li>Hư gì đổi nấy 12 tháng tại 3308 siêu thị trên toàn quốc</li>
                                <li>Bảo hành chính hãng 1 năm</li>
                            </ul>
                        </div>
                        <div className="promotionhssv">
                            <h3>Giảm thêm hàng triệu đồng</h3>
                            <div className="hssv">Đối với học sinh, sinh viên, giáo viên</div>
                            <button>Mua ngay</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="comment">
                        <TextArea placeholder="Nhập nội dung bình luận" style={{ width: 990 }} value={comment} onChange={(e) => setComment(e.target.value)} />
                        <div className="btn-comment">
                            <Button type="primary" size="large" onClick={() => handlesubmitcomment()}>Gửi</Button>
                        </div>
                        {listcomment.map((value, index) => {
                            return (
                                <div className="khung-comment" id={index.id}>
                                    <h3 className="name-comment">{value.user.name}</h3>
                                    <div className="noidung-comment">{value.comment}</div>
                                </div>
                            )
                        })}
                    </div>

                </Row>
                <div className="rate">
                    <div><BtnRate user={user} product_id={id} starapi={starapi} /></div>
                    {star.map((v, i) => {
                        return (
                            <div className="khung-rate" id={i.id}>
                                <h3 className="name-rate">{v.user.name}</h3>
                                <div className="noidung-rate"><Rate value={v.stars}/></div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
export default ProductDetail;