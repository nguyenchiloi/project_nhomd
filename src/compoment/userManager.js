import { React, useEffect, useState } from "react";
import { Button, Col, Form, Image, Input, Row, Space, Table, Typography } from 'antd';
import axios from "axios";
import moment from "moment/moment";
import BtnAddCategory from "./btnAddCategory";
import BtnEditCategory from "./btnEditCategory";
import BtnDeleteCategory from "./btnDeleteCategory";
import BtnEditUser from "./btnEditUser";
import BtnDeleteUser from "./btnDeleteUser";

const UserManager = () => {
    const [listUser, setListUser] = useState([]);
    const [page, setPage] = useState(1);
    const [form] = Form.useForm();
    const usersapi = () => {
        axios.get(`http://127.0.0.1:8000/api/admin/users`)
            .then(res => {
                const persons = res.data;
                setListUser(persons);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        usersapi();
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
            title: 'Tên người dùng',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            align: 'center',
          },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space direction="vertical" size="middle">
                    <BtnEditUser _={_} id={record.id} usersapi={usersapi} />
                    <BtnDeleteUser id={record.id} usersapi={usersapi}/>
                </Space>
            ),
            align: 'center',
        },
    ];
    const data = listUser;

    return (
        <>

            <Table pagination={{ pageSize: 5, current: page, onChange: (e) => setPage(e) }} columns={columns} dataSource={data} style={{ padding: 50}} />
        </>
    )
}
export default UserManager;