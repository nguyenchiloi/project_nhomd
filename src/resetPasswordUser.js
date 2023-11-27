import { Button, Col, Form, Input, Row, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const ResetPasswordUser = () => {
   return (
      <>
         <div className='change-password'>
            <h1 style={{textAlign: 'center'}}>Thay đổi mật khẩu người dùng</h1>
            <div className='form'>
               <Form layout="vertical">
                  <Row className="d-flex" justify="start" gutter={[0, 15]}>
                     <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item
                           name="password"
                           label="Nhập mật khẩu cũ:"
                           rules={[{ required: true, message: 'vui lòng nhập mật khẩu cũ' }]}
                           style={{ marginLeft: "35%" }}
                        >
                           <Input placeholder="Nhập mật khẩu cũ" name="password" />
                        </Form.Item>
                     </Col>
                     <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item
                           name="newPassword"
                           label="Nhập mật khẩu mới:"
                           rules={[{
                              required: true,
                              message: "Vui lòng nhập mật khẩu mới",
                           },
                           ]}
                           style={{ marginLeft: "35%" }}
                        >
                           <Input placeholder="Nhập mật khẩu mới" name="newPassword" />
                        </Form.Item>
                     </Col>
                     <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item
                           name="r_password"
                           label="Xác nhận mật khẩu:"
                           rules={[{ required: true, message: 'vui lòng xác nhận mật khẩu' }]}
                           style={{ marginLeft: "35%" }}
                        >
                           <Input placeholder="Xác nhận mật khẩu mới" name="r_password" />
                        </Form.Item>
                     </Col>

                     <Button type="primary" htmlType="submit" className="btn-resetPasswordUser" size="large">Đồng ý</Button>
                  </Row>
               </Form>
            </div>
         </div>
      </>
   )
}
export default ResetPasswordUser;