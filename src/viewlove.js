import { useEffect, useState } from 'react';
import './cart.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Image } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

const ViewLove = ({ user }) => {
    const [listCart, setListCart] = useState([]);
    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/api/user/wishlist-index`, {
            user_id: user.id

        }).then(res => {
            const persons = res.data.data;
            setListCart(persons);
        })
            .catch(error => console.log(error));
    }, [])
    const RemoveProductUser = (value) => {
        let user_id = user.id;
        let product_id = value.product_id;
        fetch('http://127.0.0.1:8000/api/user/wishlist-delelte', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id })
        }).then(res => res.json()).then(data => {

        }).catch((err) => {
            err();
        })
    }
    const removeproduct = (product) => {
        listCart.map((value) => {
            console.log(value, product);
            if (product.id === value.id) {
                RemoveProductUser(value);
            }
        })
        const exsit = listCart.find((x) => {
            return x.id === product.id
        })

        setListCart(listCart.filter((x) => {
            return x.id !== product.id
        }))
    }
    return (
        <>
            <div className='cartcontainer'>
                {listCart.length === 0 &&
                    <div className='ronglike'>
                        <h2 className='rong'>Không có sản phẩm yêu thích</h2>
                        <Link to='/product' className='emptycartbtn'>Tới sản phẩm ngay bây giờ</Link>
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
                                            <h3>{value.name}</h3>
                                            <p>Giá tiền: {value.money} $</p>
                                            <h4 className="description">Mô tả:<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                                                {value.description}
                                            </Paragraph> </h4>
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
            </div >
        </>
    )
}
export default ViewLove;