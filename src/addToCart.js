import { Button, Form, message } from "antd";
import axios from "axios";
import { useEffect } from "react";

const AddToCart = (value, user) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Thêm sản phẩm vào giỏ hàng thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Thêm ản phẩm vào giỏ hàng thất bại',
        });
    };  
    const user_id = user.id;
    const product_id = value.id;
    const money = value.money;
    const handlesubmit = () => {
        fetch('http://127.0.0.1:8000/api/add-to-cart', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ user_id, product_id, money })
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
    return (
        <>
            {contextHolder}
            {handlesubmit()}
        </>
    )
}
export default AddToCart;