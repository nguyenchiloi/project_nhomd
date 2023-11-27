import { Button, Col, Form, Input, Row, message } from 'antd'
import './resetPasswordUser.css'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react';
import axios from 'axios';

const ResetPasswordUser = () => {
   const [password, setPassword] = useState('');
   const [n_password, setN_password] = useState('');
   const [r_password, setR_password] = useState('');
   let token = localStorage.getItem('token');
   const [messageApi, contextHolder] = message.useMessage();
   const [form] = Form.useForm();
   const success = (message) => {
      messageApi.open({
         type: 'success',
         content: message ? message : 'Đổi mật khẩu thành công',
      });
   };
   const error = (message) => {
      messageApi.open({
         type: 'error',
         content: message ? message : 'Đổi mật khẩu thất bại',
      });
   };
   const headers = { Authorization: `Bearer ${token}` }
   console.log(headers);
   const handleSubmit = () => {
      const ob = { password: password, n_password: n_password, r_password: r_password };
      axios.request(
         {
         url:`http://127.0.0.1:8000/api/user/change-password`,
         method:"POST",
         headers:{Authorization: `Bearer ${token}`},
         data:ob
      }
      ).then(res => res.json()).then(data => {
         // if (data.status === 200) {
         //    success();
         //    form.resetFields();
         // } else {
         //    error(data.message);
         // }
         console.log(data);
      }).catch((err) => {
         error();
      })
   }
   return (
      <>
      {contextHolder}
         <div className='change-password'>
            <h1>THAY ĐỔI MẬT KHẨU NGƯỜI DÙNG</h1>
            <div className='form'>
               <Form layout="vertical" form={form} onFinish={handleSubmit}>
                  <Row className="d-flex" justify="start" gutter={[0, 15]}>
                     <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item
                           name="password"
                           label="Nhập mật khẩu cũ:"
                           rules={[{ required: true, message: 'vui lòng nhập mật khẩu cũ' }]}
                           style={{ marginLeft: "35%" }}
                        >
                           <Input type="password" onChange={e => setPassword(e.target.value)} placeholder="Nhập mật khẩu cũ" />
                        </Form.Item>
                     </Col>
                     <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item
                           name="n_password"
                           label="Nhập mật khẩu mới:"
                           rules={[{
                              required: true,
                              message: "Vui lòng nhập mật khẩu mới",
                           },
                           ]}
                           style={{ marginLeft: "35%" }}
                        >
                           <Input type="password" onChange={e => setN_password(e.target.value)} placeholder="Nhập mật khẩu mới" />
                        </Form.Item>
                     </Col>
                     <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item
                           name="r_password"
                           label="Xác nhận mật khẩu mới:"
                           rules={[{ required: true, message: 'vui lòng xác nhận mật khẩu' }]}
                           style={{ marginLeft: "35%" }}
                        >
                           <Input type="password" onChange={e => setR_password(e.target.value)} placeholder="Xác nhận mật khẩu mới" />
                        </Form.Item>
                     </Col>

                     <Button type="primary" htmlType="submit" className="btn-resetPasswordUser" size="large">Thay đổi mật khẩu</Button>
                  </Row>
               </Form>
            </div>
         </div>
      </>
   )
}
export default ResetPasswordUser;