import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='/img/logo-cnsg.png' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Hãy đến với công nghệ sài gòn để cập nhật công nghệ và mua những món hàng uy tín chất lượng</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='page'>
                <h3>Danh sách trang</h3>
                <ul>
                    <li><Link to={'/'}>Trang chủ</Link></li>
                    <li><Link to={'/product'}>Sản phẩm</Link></li>
                    <li><Link to={'/contact'}>Liên hệ</Link></li>
                    <li><Link to={'/showroom'}>Showroom</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer