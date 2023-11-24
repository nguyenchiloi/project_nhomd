import { React, useEffect, useState } from "react";
import { Button, Col, Form, Image, Input, Row, Space, Table, Typography } from 'antd';
import axios from "axios";
import moment from "moment/moment";
import BtnAddCategory from "./btnAddCategory";
import BtnEditCategory from "./btnEditCategory";
import BtnDeleteCategory from "./btnDeleteCategory";

const CategoryManager = () => {
    const [listCategory, setListCategory] = useState([]);
    const [page, setPage] = useState(1);
    const [form] = Form.useForm();
    const categoryapi = () => {
        axios.get(`http://127.0.0.1:8000/api/categories`)
            .then(res => {
                const persons = res.data;
                setListCategory(persons);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        categoryapi();
    }, [])

    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            render: (_, _record, index) => (page * 5 - 5 + index + 1),
            align: 'center',
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (_,index) => {
                const date = moment(_);
                return date.format('DD/MM/yyyy');
            },
            align: 'center',
          },
          {
            title: 'Ngày cập nhật',
            dataIndex: 'updated_at',
            key: 'updated_at',
            render: (_,index) => {
                const date = moment(_);
                return date.format('DD/MM/yyyy');
            },
            align: 'center',
          },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space direction="vertical" size="middle">
                    <BtnEditCategory _={_} id={record.id} categoryapi={categoryapi}/>
                    <BtnDeleteCategory id={record.id} categoryapi={categoryapi} />
                </Space>
            ),
            align: 'center',
        },
    ];
    const data = listCategory;

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                className="form-group px-2 pt-2 pb-0 mb-0"
            >
                

                <Row className="pt-0 pb-2">
                    <Col
                        span={24}
                        style={{ justifyContent: 'end', columnGap: 10 }}
                        className=" card-user__btn-function d-flex justify-content-between align-items-center"
                    >
                       
                        <BtnAddCategory categoryapi={categoryapi} />
                    </Col>
                </Row>
            </Form>

            <Table pagination={{ pageSize: 5, current: page, onChange: (e) => setPage(e) }} columns={columns} dataSource={data} style={{ padding: 50}} />
        </>
    )
}
export default CategoryManager;