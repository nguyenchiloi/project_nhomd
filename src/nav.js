import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
const Nav = ({ isAuthen, setIsAuthen, searchbtn }) => {
    const [search, setSearch] = useState();
    const usenavigate = useNavigate();
    const [token, setToken] = useState();
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    })
    let nameUser = localStorage.getItem('name');
    return (
        <>
            <div className='free'>
                <div className='logo'>
                    <img src='./img/logo-cnsg.png' width={150} alt='logo'></img>
                </div>
            </div>
            <div className='main_header'>
                <Row>
                    <Col md={8} style={{padding: 10}}>
                        <Row>
                            <Col md={5} style={{ textAlign: 'center' }}><Link to='/' className='link'>Trang chủ</Link></Col>
                            <Col md={5} style={{ textAlign: 'center' }}><Link to='/product' className='link'>Sản phẩm</Link></Col>
                            <Col md={5} style={{ textAlign: 'center' }}><Link to='/about' className='link'>Về chúng tôi</Link></Col>
                            <Col md={5} style={{ textAlign: 'center' }}><Link to='/contact' className='link'>Liên hệ</Link></Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={18}>
                                <Input size='large' value={search} placeholder='Nhập tên sản phẩm cần tìm kiếm ...' autoComplete='off' onChange={(e) => setSearch(e.target.value)} />
                            </Col>
                            <Col style={{marginLeft: 10}}>
                                <Button size='large' type="primary" onClick={() => searchbtn(search)} style={{background: "#68635c"}}>Search</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className='icon'>
                            <Row>
                                <Col md={12}>
                                    {
                                        nameUser ?
                                            (
                                                <div className='account'>
                                                    <div className='user_icon'>
                                                        <AiOutlineUser />
                                                    </div>
                                                    <p>Hello, {nameUser}</p>
                                                </div>
                                            ) : ''
                                    }
                                </Col>
                                <Col md={3}>
                                    <Link to="/"><AiOutlineHeart style={{ fontSize: 30, color: "white" }} /></Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/cart"><BsBagCheck style={{ fontSize: 30, color: "white" }} /></Link>

                                </Col>
                            </Row>


                        </div>
                    </Col>
                    <Col md={2}>
                        {
                            token ?
                                <button onClick={() => { localStorage.removeItem('name'); localStorage.removeItem('type'); localStorage.removeItem('token'); usenavigate('/'); setToken(false); setIsAuthen(false) }}><LogoutOutlined style={{ fontSize: 30, color: 'white' }} /> </button>
                                :
                                <Link to='/login'><span><LoginOutlined style={{ fontSize: 30, color: "white" }} /></span></Link>
                        }
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Nav