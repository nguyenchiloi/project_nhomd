import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from './productdetail'
import './product.css'
import axios from 'axios';
const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
    const { loginWithRedirect,isAuthenticated} = useAuth0();
    const [listProduct, setListProduct] = useState([]);
    const [listCategory, setListCategogy] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products`)
            .then(res => {
                const persons = res.data;
                setListProduct(persons);
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
    const filtterproduct = (product) =>
    {
        const update = listProduct.filter((x) => 
        {
           return x.category_id === product;
        })
        setListProduct(update);
    }
    
    const AllProducts = () => 
    {
        const list = listProduct;
    }
  return (
    <>
    {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                listProduct.map((value) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={`./img/${value.photo}`} alt={value.money}></img>
                            </div>
                            <div className='detail'>
                                <h4>{value.name}</h4>
                                <h2>{value.name}</h2>
                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
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
        <h2># Products</h2>
        <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                    <ul>
                    <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filtterproduct (1)}>Màn hình</li>
                        <li onClick={() => filtterproduct (2)}>Điện thoại</li>
                        <li onClick={() => filtterproduct (3)}>Chuột Gaming</li>
                        <li onClick={() => filtterproduct (4)}>Tai nghe</li>
                        <li onClick={() => filtterproduct (5)}>Bàn phím</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        listProduct.map((value,index) => 
                        {
                            return(
                                <>
                                    <div className='box' key={index.id}>
                                        <div className='img_box'>
                                          <img src={`./img/${value.photo}`} alt={value.name}></img>
                                          <div className='icon'>
                                            {
                                                isAuthenticated ? 
                                                <li onClick={() => addtocart (value)}><AiOutlineShoppingCart /></li>
                                                :
                                                <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                            }
                                            <li onClick={() => view (value)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>                                     
                                          </div>
                                        </div>
                                        <div className='detail'>
                                          <p>{value.category.name}</p>
                                          <h3>{value.name}</h3>
                                          <h4>${value.money}</h4>
                                        </div>
                                      </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product