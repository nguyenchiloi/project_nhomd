import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './home.css';
import { Row, Col, Image, message } from 'antd';
import axios from 'axios';
const Home = ({ detail, view, close, setClose, user }) => {
  const [product, setProduct] = useState([]);
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
    axios.get(`http://127.0.0.1:8000/api/products?limit=8`)
      .then(res => {
        const persons = res.data;
        setProduct(persons);
      })
      .catch(error => console.log(error));
  }, [])
  const addtocart = (value) => {
    if (!user.id && !localStorage.getItem('token')) {
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
  const like = (value) => {
    if (!user.id && !localStorage.getItem('token')) {
      usenavigate('/login');
    }
    let user_id = user.id;
    let product_id = value.id;
    fetch('http://127.0.0.1:8000/api/user/wishlist ', {
      method: "POST",
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({ user_id, product_id })
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
    <>{contextHolder}
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
                        <Image src={`./img/${value.photo}`} alt={value.name} width={250} />
                      </div>
                      <div className='detail'>
                        <h4>{value.category.name}</h4>
                        <h2>{value.name}</h2>
                        <p>{value.description} </p>
                        <h3>{value.money} $</h3>
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
      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The Best Iphone 15 ProMax 2023</h2>
            <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
          </div>
          <div className='img_box'>
            <Image src='./img/iphone15promax.png' />
          </div>
        </div>
      </div>
      <div className='product_type'>
        <Row justify='"space-between"' gutter={[16, 16]}>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='img_box'>
                <img src='./img/Mobile Phone.png' alt='mobile'></img>
              </div>
            </div>
          </Col>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='img_box'>
                <img src='./img/smart watch.png' alt='watch'></img>
              </div>
            </div>
          </Col>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='img_box'>
                <img src='./img/headphone.png' alt='headphone'></img>
              </div>
            </div>
          </Col>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='img_box'>
                <img src='./img/tp6.png' alt='cpu '></img>
              </div>
            </div>
          </Col>
        </Row >
      </div>


      <div className='about'>
        <Row justify='"space-between"' gutter={[16, 16]}>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='icon'>
                <FiTruck />
              </div>
              <div className='detail'>
                <h3>Miễn phí giao hàng</h3>
                <p>Trên $1000</p>
              </div>
            </div>
          </Col>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='icon'>
                <CiPercent />
              </div>
              <div className='detail'>
                <h3>Giảm giá thành viên</h3>
                <p>Trên mỗi đơn hàng</p>
              </div>
            </div>
          </Col>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='icon'>
                <BsCurrencyDollar />
              </div>
              <div className='detail'>
                <h3>Hoàn lại tiền</h3>
                <p>Tiền hoàn lại</p>
              </div>
            </div>
          </Col>
          <Col md={5} offset={1}>
            <div className='box'>
              <div className='icon'>
                <BiHeadphone />
              </div>
              <div className='detail'>
                <h3>Hỗ trợ khách hàng</h3>
                <p>Hỗ trợ mọi lúc 24/24</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='product'>
        <h2>Top Products</h2>
        <Row justify='"space-between"' gutter={[16, 16]}>
          {
            product.map((value, index) => {
              return (
                <Col span={5} offset={1} >
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
                      <Link to={`/productdetail/${value.id}`}><p>{value.category.name}</p>
                      <h3>{value.name}</h3>
                      <h4>${value.money}</h4></Link>
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>

      <div className='banner'>
        <div className='container'>
          <div className='detail'>
            <h4>CÔNG NGHỆ MỚI</h4>
            <h3>Sam Sung Galaxy Z Fold5</h3>
            <p>1200 $</p>
          </div>
          <div className='img_box'>
            <img src='./img/samsungzfort5.png' alt='sliderimg'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home