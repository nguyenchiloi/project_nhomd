import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import UserDetail from './userDetail';

const Nav = ({ isAuthen, setIsAuthen,setUser, setKey }) => {
    const [search, setSearch] = useState();
    const usenavigate = useNavigate();
    const [token, setToken] = useState();
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    })
    let nameUser = localStorage.getItem('name');
    const items = [
        {
            label: <Link to={'/userdetail'} key={1} onClick={()=> setKey(items[0].key)}>Thông tin người dùng</Link>,
            key: 1,
        },
        {
            label: <Link to={'/userdetail'} key={2} onClick={()=> setKey(items[1].key)}>Thay đổi mật khẩu</Link>,
            key: 2,
        },
        {
            label: <Link to={'/userdetail'} key={3} onClick={()=> setKey(items[2].key)}>'Xem chi tiết đơn hàng'</Link>,
            key: 3,
        },
    ];
    
    return (
        <>
            <div className='free'>
                <div className='logo'>
                    <img src='./img/logo-cnsg.png' width={150} alt='logo'></img>
                </div>
            </div>
            <div className='main_header'>
                <Row>
                    <Col md={18} style={{ padding: 5 }}>
                        <Row>
                            <Col md={3} style={{ textAlign: 'center' }}><Link to='/' className='link'>Trang chủ</Link></Col>
                            <Col md={3} style={{ textAlign: 'center' }}><Link to='/product' className='link'>Sản phẩm</Link></Col>
                            <Col md={3} style={{ textAlign: 'center' }}><Link to='/showroom' className='link'>Showroom</Link></Col>
                            <Col md={3} style={{ textAlign: 'center' }}><Link to='/guarantee' className='link'>Bảo hành</Link></Col>
                            <Col md={3} style={{ textAlign: 'center' }}><Link to='/news' className='link'>Tin tức</Link></Col>
                            <Col md={3} style={{ textAlign: 'center' }}><Link to='/about' className='link'>Về chúng tôi</Link></Col>
                            <Col md={3} style={{ textAlign: 'center' }}><Link to='/contact' className='link'>Liên hệ</Link></Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <div className='icon'>
                            <Row>
                                <Col md={12}>
                                    {
                                        nameUser ?
                                            (
                                                <Dropdown
                                                    menu={{
                                                        items,
                                                    }}
                                                    trigger={['click']}
                                                >
                                                    <div className='account'>
                                                        <div className='user_icon'>
                                                            <AiOutlineUser />
                                                        </div>
                                                        <p>Hello, {nameUser}</p>
                                                    </div>
                                                </Dropdown>
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
                                <button onClick={() => { localStorage.removeItem('name'); localStorage.removeItem('type'); localStorage.removeItem('token'); usenavigate('/'); setToken(false); setIsAuthen(false);setUser([]) }} style={{ border: 'none', background: '#101010' }}><LogoutOutlined style={{ fontSize: 30, color: 'white' }} /> </button>
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