import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import './product.css'
import axios from 'axios';
import { Button, Col, Image, Row, message } from 'antd';
import { AppstoreOutlined } from "@ant-design/icons";
import { Link, useNavigate } from 'react-router-dom';
import AddToCart from './addToCart';

const Product = ({ detail, view, close, setClose, user }) => {

    const [listCategory, setListCategogy] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const usenavigate = useNavigate();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Thêm sản phẩm thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Thêm sản phẩm thất bại',
        });
    };
    const successview = () => {
        messageApi.open({
            type: 'success',
            content: 'Thêm sản phẩm yêu thích thành công',
        });
    };
    const errorview = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Thêm sản phẩm yêu thích thất bại',
        });
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products`)
            .then(res => {
                const persons = res.data;
                setListProduct(persons)
                setDataFilter(persons);
            })
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/categories`)
            .then(res => {
                const persons = res.data;
                setListCategogy(persons);
            })
            .catch(error => console.log(error));
    }, [])

    const [dataFilter, setDataFilter] = useState([])
    const filtterproduct = (product_categoryid) => {
        setDataFilter(listProduct.filter((item) => item.category_id === product_categoryid))
    }

    const AllProducts = () => {
        axios.get(`http://127.0.0.1:8000/api/products`)
            .then(res => {
                const persons = res.data;
                setListProduct(persons)
                setDataFilter(persons);
            })
            .catch(error => console.log(error));
    }
    
    const addtocart = (value) => {
        if(!user.id && !localStorage.getItem('token')){
            usenavigate('/login');
        }
        let user_id = user.id;
        let product_id = value.id;
        let money = value.money;
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
    const like = (value) =>{
        if(!user.id && !localStorage.getItem('token')){
            usenavigate('/login');
        }
        let user_id = user.id;
        let product_id = value.id;
        fetch('http://127.0.0.1:8000/api/user/wishlist ', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id})
        }).then(res => res.json()).then(data => {
            if (data.success) {
                successview();
            } else {
                errorview(data.message);
            }
        }).catch((err) => {
            error();
        })
    }
    return (
        <>
            {contextHolder}
            {
                close ?
                    <div className='product_detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                            {
                                detail.map((value) => {
                                    return (
                                        <div className='productbox'>
                                            <div className='img-box'>
                                                <img src={`./img/${value.photo}`} alt={value.money}></img>
                                            </div>
                                            <div className='detail'>
                                                <h4>{value.name}</h4>
                                                <h2>{value.name}</h2>
                                                <p>{value.description}</p>
                                                <h3>{value.Price}</h3>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='productbox'></div>
                        </div>
                    </div> : null
            }
            <div className='products'>
                <h2><AppstoreOutlined /> Sản phẩm</h2>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>Danh mục</h3>
                            <ul>
                                <li onClick={() => AllProducts()}>Tất cả sản phẩm</li>
                                {listCategory.map((value) => {
                                    return (
                                        <>
                                            <li onClick={() => filtterproduct(value.id)}>{value.name}</li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='productbox'>
                        <Row justify='"space-between"' gutter={[16, 16]}>
                            {
                                dataFilter.map((value, index) => {
                                    return (
                                        <>
                                            {dataFilter.length > 3 ?
                                                <Col span={6}>
                                                    <div className='box' key={index.id}>
                                                        <div className='img_box'>
                                                            <Image width={250} src={`./img/${value.photo}`} alt={value.name} />
                                                            <div className='icon'>
                                                                <li onClick={() => addtocart(value)}><AiOutlineShoppingCart /></li>
                                                                <li onClick={() => view(value)}><BsEye /></li>
                                                                <li onClick={() => like(value)}><AiOutlineHeart /></li>
                                                            </div>
                                                        </div>
                                                        <div className='detail'>
                                                            <Link to={`/productdetail/${value.id}`}>
                                                                <p>{value.category.name}</p>
                                                                <h3>{value.name}</h3>
                                                                <h4>${value.money}</h4>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                : <Col span={8}>
                                                    <div className='box' key={index.id}>
                                                        <div className='img_box'>
                                                            <Image width={250} src={`./img/${value.photo}`} alt={value.name} />
                                                            <div className='icon'>
                                                                <li onClick={() => addtocart(value)}><AiOutlineShoppingCart /></li>
                                                                <li onClick={() => view(value)}><BsEye /></li>
                                                                <li><AiOutlineHeart /></li>
                                                            </div>
                                                        </div>
                                                        <div className='detail'>
                                                            <Link to={'/'}>
                                                                <p>{value.category.name}</p>
                                                                <h3>{value.name}</h3>
                                                                <h4>${value.money}</h4>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Col>}
                                        </>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product