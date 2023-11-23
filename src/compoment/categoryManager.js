import { React, useEffect, useState } from "react";
import { Button, Col, Form, Image, Input, Row, Space, Table, Typography } from 'antd';
import axios from "axios";
import Paragraph from "antd/es/typography/Paragraph";
import BtnAddProduct from "./btnAddProduct";
import BtnDeleteProduct from "./btnDeleteProduct";
import {SearchOutlined } from "@ant-design/icons";
import BtnEditProduct from "./btnEditProduct";

const CategoryManager = () => {
    const [listProduct, setListProduct] = useState([]);
    const [keysearch, setKetSearch] = useState("");
    const [page, setPage] = useState(1);
    const [form] = Form.useForm();
    const productapi = () => {
        axios.get(`http://127.0.0.1:8000/api/products`)
            .then(res => {
                const persons = res.data;
                setListProduct(persons);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        productapi();
    }, [])
    const handleSubmitSearch = (e)=>{
        axios.get(`http://127.0.0.1:8000/api/products/search?keyword=${keysearch}`)
            .then(res=>{
                const persons = res.data.data;
                setListProduct(persons);
            })
            .catch(error => console.log(error))
        
    }
    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            render: (_, _record, index) => (page * 5 - 5 + index + 1)
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Giá bán',
            dataIndex: 'money',
            key: 'money',
            render: (_, record) => (
                <>{_} $</>
            ),
            width: 150
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: (_, record) => (
                <>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                        {_}
                    </Paragraph>
                </>
            ),
            width: 500
        },
        {
            title: 'Danh mục',
            key: 'category',
            dataIndex: 'category',
            render: (_, record) => (
                <>{_.name}</>
            ),
            width: 150
        },
        {
            title: 'Hình',
            key: 'photo',
            dataIndex: 'photo',
            render: (_, record) => (
                <><Image
                    width={100}
                    height={100}
                    src={`./img/${_}`}
                /></>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space direction="vertical" size="middle">
                    <BtnEditProduct _={_} id={record.id} productapi={productapi}/>
                    <BtnDeleteProduct id={record.id} productapi={productapi} />
                </Space>
            ),
        },
    ];
    const data = listProduct;

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                className="form-group px-2 pt-2 pb-0 mb-0"
                onFinish={handleSubmitSearch}
            >
                <Row gutter={[16, 0]}>
                    <Col xl={6} lg={6} md={8} sm={12} xs={24}>
                        <Typography.Title level={5}>Từ khóa tìm kiếm</Typography.Title>
                        <Form.Item name="keysearch">
                            <Input size="large" placeholder="Nhập từ khóa tìm kiếm" value={keysearch} onChange={(e)=> setKetSearch(e.target.value)}/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row className="pt-0 pb-2">
                    <Col
                        span={24}
                        style={{ justifyContent: 'end', columnGap: 10 }}
                        className=" card-user__btn-function d-flex justify-content-between align-items-center"
                    >
                        <Button
                            type="primary" size="large" onClick={handleSubmitSearch}
                        ><SearchOutlined />Tìm kiếm</Button>
                        <BtnAddProduct productapi={productapi} />
                    </Col>
                </Row>
            </Form>

            <Table pagination={{ pageSize: 5, current: page, onChange: (e) => setPage(e) }} columns={columns} dataSource={data} style={{ padding: 50}} />
        </>
    )
}
export default CategoryManager;