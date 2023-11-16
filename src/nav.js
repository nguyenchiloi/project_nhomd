import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
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
                <div className='container'>
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                        <button onClick={() => searchbtn(search)}>Search</button>
                    </div>
                    <div className='icon'>
                        {
                            nameUser ?
                            (
                                <div className='account'>
                                    <div className='user_icon'>
                                        <AiOutlineUser />
                                    </div>
                                    <p>Hello, {nameUser}</p>
                                </div>
                            ):''
                        }
                        <div className='second_icon'>
                            <Link to="/" className='link'><AiOutlineHeart /></Link>
                            <Link to="/cart" className='link'><BsBagCheck /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                        {
                            token ?
                                <button onClick={() => { localStorage.removeItem('name');localStorage.removeItem('type');localStorage.removeItem('token'); usenavigate('/'); setToken(false); setIsAuthen(false) }}><LogoutOutlined /> </button>
                                :
                                <Link to='/login'><span><LoginOutlined /></span></Link>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Nav