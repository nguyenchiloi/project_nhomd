import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'
import { Image } from 'antd';
const Cart = ({ cart, setCart }) => {
    // increace qty
    const incqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exsit, qty: exsit.qty + 1 } : curElm
        }))
    }

    // Dec Qty
    const decqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((value) => {
            return value.id === product.id && value.qty > 0 ? { ...exsit, qty: exsit.qty - 1 } : value
        }))
    }
    //Remove cart product
    const removeproduct = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        if (exsit.qty > 0) {
            setCart(cart.filter((x) => {
                return x.id !== product.id
            }))
        }
    }
    // Total price
    const Totalprice = cart.reduce((money, item) => money + item.qty * item.money, 0)
    return (
        <>
            <div className='cartcontainer'>
                {cart.length === 0 &&
                    <div className='emptycart'>
                        <h2 className='empty'>Cart is Empty</h2>
                        <Link to='/product' className='emptycartbtn'>Shop Now</Link>
                    </div>
                }
                <div className='contant'>
                    {
                        cart.map((value, index) => {
                            return (
                                <div className='cart_item' key={index.id}>
                                    <div className='img_box'>
                                        <Image width={250} src={`./img/${value.photo}`} alt={value.name} />
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h4>{value.category.name}</h4>
                                            <h3>{value.name}</h3>
                                            <p>Giá tiền: {value.money} $</p>
                                            <div className='qty'>
                                                <button className='incqty' onClick={() => incqty(value)}>+</button>
                                                <input type='text' value={value.qty}></input>
                                                <button className='decqty' onClick={() => decqty(value)}>-</button>
                                            </div>
                                            <h4 className='subtotal'>Tổng tiền: {value.money * value.qty} $</h4>
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
                    cart.length > 0 &&
                    <>
                        <h2 className='totalprice'>total: {Totalprice} $</h2>
                        <button className='checkout'>Checkout</button>
                    </>
                }
            </div>
        </>
    )
}

export default Cart