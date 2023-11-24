import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import './product.css'
import axios from 'axios';
import { Col, Image, Row } from 'antd';
import { AppstoreOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const Product = ({ detail, view, close, setClose, addtocart }) => {

    const [listCategory, setListCategogy] = useState([]);
    const [listProduct, setListProduct] = useState([])
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
    return (
        <>
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