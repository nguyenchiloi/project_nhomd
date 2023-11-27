import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'
import { Button, Card, Image, message } from 'antd';
import axios from 'axios';
import Pay from './pay';
const Cart = ({ user }) => {
    const [messageApi, contextHolder] = message.useMessage();
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
    // increace qty

    const addtocartQuantity = (value) => {
        let user_id = user.id;
        let product_id = value.product_id;
        let money = value.product_price;
        let quantity = value.quantity + 1;
        fetch('http://127.0.0.1:8000/api/add-to-cart', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id, money, quantity })
        }).then(res => res.json()).then(data => {

        }).catch((err) => {
            error();
        })
    }
    const addtocartQuantityDec = (value) => {
        let user_id = user.id;
        let product_id = value.product_id;
        let money = value.product_price;
        let quantity = value.quantity - 1;
        fetch('http://127.0.0.1:8000/api/add-to-cart', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id, money, quantity })
        }).then(res => res.json()).then(data => {
        }).catch((err) => {
            error();
        })
    }
    // Total price
    const [listCart, setListCart] = useState([]);
    const Totalprice = listCart.reduce((money, item) => money + item.quantity * item.product_price, 0);
    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/api/cart/detail`, {
            user_id: user.id

        }).then(res => {
            const persons = res.data.data.product_details;
            setListCart(persons);
        })
            .catch(error => console.log(error));
    }, [])
    const incqty = (product) => {
        const exsit = listCart.find((x) => {
            return x.product_id === product.product_id
        })
        setListCart(listCart.map((curElm) => {
            return curElm.product_id === product.product_id ?
                { ...exsit, quantity: exsit.quantity + 1 }
                : curElm
        }))
        listCart.map((value) => {
            return value.product_id === product.product_id ?
                addtocartQuantity(value) : value
        })

    }

    // Dec Qty
    const decqty = (product) => {
        const exsit = listCart.find((x) => {
            return x.product_id === product.product_id
        })
        setListCart(listCart.map((value) => {
            return value.product_id === product.product_id && value.quantity > 1 ? { ...exsit, quantity: exsit.quantity - 1 } : value
        }))
        listCart.map((value) => {
            return value.product_id === product.product_id ?
                addtocartQuantityDec(value) : value
        })
    }
    //Remove cart product
    const RemoveProductUser = (value) => {
        let user_id = user.id;
        let product_id = value.product_id;
        fetch('http://127.0.0.1:8000/api/cart/delete-product', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id })
        }).then(res => res.json()).then(data => {

        }).catch((err) => {
            error();
        })
    }
    const removeproduct = (product) => {
        listCart.map((value) => {
            if (product.product_id === value.product_id) {
                RemoveProductUser(value);
            }
        })
        const exsit = listCart.find((x) => {
            return x.product_id === product.product_id
        })
        if (exsit.quantity > 0) {
            setListCart(listCart.filter((x) => {
                return x.product_id !== product.product_id
            }))
            
        }
    }
    return (
        <>
            {contextHolder}
            <div className='cartcontainer'>
                {listCart.length === 0 &&
                    <div className='emptycart'>
                        <h2 className='empty'>Cart is Empty</h2>
                        <Link to='/product' className='emptycartbtn'>Shop Now</Link>
                    </div>
                }
                <div className='contant'>
                    {
                        listCart.map((value, index) => {
                            return (
                                <div className='cart_item' key={index.id}>
                                    <div className='img_box'>
                                        <Image width={250} src={`./img/${value.photo}`} alt={value.name} />
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h3>{value.product_name}</h3>
                                            <p>Giá tiền: {value.product_price} $</p>
                                            <div className='qty'>
                                                <button className='decqty' onClick={() => decqty(value)}>-</button>
                                                <input type='text' value={value.quantity}></input>
                                                <button className='incqty' onClick={() => incqty(value)}>+</button>
                                            </div>
                                            <h4 className='subtotal'>Tổng tiền: {value.product_price * value.quantity} $</h4>
                                        </div>
                                        <div className='close'>
                                            <button onClick={() => removeproduct(value)}><AiOutlineClose /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    listCart.length > 0 &&
                    <>
                        <h2 className='totalprice'>total: {Totalprice} $</h2>
                        <Pay user={user} listCart={listCart}/>
                    </>
                }
            </div>
        </>
    )
}

export default Cart