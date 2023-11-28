import React, { useEffect, useState } from 'react';
import { Anchor, Col, Image, Menu, Row, Tabs } from 'antd';
import axios from 'axios';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const ViewOrderDetail = (user) => {
  const [listProductOrder, setListProductOrder] = useState([]);
  useEffect(() => {
    axios.post(`http://127.0.0.1:8000/api/user/orders`, {
      user_id: user.user.id
    }).then(res => {
      const persons = res.data.data.orders;
      setListProductOrder(persons);
    }).catch(error => console.log(error));
  }, []);
  const items = [
    {
      label: 'Hủy đơn hàng',
      key: '1',
      icon: <MailOutlined />,
      children: <>{listProductOrder.map((value, index) => {
        return (
          <>
            {value.order_status === 0 ?
              <div id="part-1" style={{ marginBottom: 10, padding: 20 }}>
                {value.product_details.map((v, i) => {
                  return (
                    <>
                      <div style={{ display: 'flex', border: "1px solid black", borderRadius: 10, marginBottom: 10, background: "white" }}>
                        <Image src={`./img/${v.photo}`} width={150} height={150} />
                        <div style={{ marginTop: 20 }}>
                          <h2 style={{ marginLeft: 20, color: 'red' }}>{v.product_name}</h2>
                          <h4 style={{ marginLeft: 20, marginTop: 10 }}>Số lượng: {v.quantity}</h4>
                          <h4 style={{ marginLeft: 20 }}>Tổng tiền: {v.total_money} $</h4>
                        </div>
                      </div>

                    </>
                  )

                })}
                <h2>Tổng tiền tất cả sản phẩm: {value.total_money} $</h2>
              </div>
              : ''}
          </>
        )
      })}</>,
    },
    {
      label: 'Chờ xác nhận',
      key: '2',
      icon: <MailOutlined />,
      children: <>{listProductOrder.map((value, index) => {
        return (
          <>
            {value.order_status === 1 ?
              <div id="part-1" style={{ marginBottom: 10, padding: 20 }}>
                {value.product_details.map((v, i) => {
                  return (
                    <>
                      <div style={{ display: 'flex', border: "1px solid black", borderRadius: 10, marginBottom: 10, background: "white" }}>
                        <Image src={`./img/${v.photo}`} width={150} height={150} />
                        <div style={{ marginTop: 20 }}>
                          <h2 style={{ marginLeft: 20, color: 'yellow' }}>{v.product_name}</h2>
                          <h4 style={{ marginLeft: 20, marginTop: 10 }}>Số lượng: {v.quantity}</h4>
                          <h4 style={{ marginLeft: 20 }}>Tổng tiền: {v.total_money} $</h4>
                        </div>
                      </div>
                    </>
                  )
                })}
                <h2>Tổng tiền tất cả sản phẩm: {value.total_money} $</h2>
              </div>
              : ''}
          </>
        )
      })}</>,
    },
    {
      label: 'Đang vận chuyển',
      key: '3',
      icon: <MailOutlined />,
      children: <>{listProductOrder.map((value, index) => {
        return (
          <>
            {value.order_status === 2 ?
              <div id="part-1" style={{ marginBottom: 10, padding: 20 }}>
                {value.product_details.map((v, i) => {
                  return (
                    <>
                      <div style={{ display: 'flex', border: "1px solid black", borderRadius: 10, marginBottom: 10, background: "white" }}>
                        <Image src={`./img/${v.photo}`} width={150} height={150} />
                        <div style={{ marginTop: 20 }}>
                          <h2 style={{ marginLeft: 20, color: 'green' }}>{v.product_name}</h2>
                          <h4 style={{ marginLeft: 20, marginTop: 10 }}>Số lượng: {v.quantity}</h4>
                          <h4 style={{ marginLeft: 20 }}>Tổng tiền: {v.total_money} $</h4>
                        </div>
                      </div>
                    </>
                  )
                })}
                <h2>Tổng tiền tất cả sản phẩm: {value.total_money} $</h2>
              </div>
              : ''}
          </>
        )
      })}</>,
    },
    {
      label: 'Đã nhận hàng',
      key: '4',
      icon: <MailOutlined />,
      children: <>{listProductOrder.map((value, index) => {
        return (
          <>
            {value.order_status === 3 ?
              <div id="part-1" style={{ marginBottom: 10, padding: 20 }}>
                {value.product_details.map((v, i) => {
                  return (
                    <>
                      <div style={{ display: 'flex', border: "1px solid black", borderRadius: 10, marginBottom: 10, background: "white" }}>
                        <Image src={`./img/${v.photo}`} width={150} height={150} />
                        <div style={{ marginTop: 20 }}>
                          <h2 style={{ marginLeft: 20, color: 'darkgreen' }}>{v.product_name}</h2>
                          <h4 style={{ marginLeft: 20, marginTop: 10 }}>Số lượng: {v.quantity}</h4>
                          <h4 style={{ marginLeft: 20 }}>Tổng tiền: {v.total_money} $</h4>
                        </div>
                      </div>
                    </>
                  )
                })}
                <h2>Tổng tiền tất cả sản phẩm: {value.total_money} $ </h2>
              </div>
              : ''}
          </>
        )
      })}</>,
    },
  ];
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>

      <Tabs defaultActiveKey="1" items={items} type="card" />

    </>
  )

};
export default ViewOrderDetail;