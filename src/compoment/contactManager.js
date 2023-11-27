import { React, useEffect, useState } from "react";
import { Button, Image, Space, Table, message } from 'antd';
import axios from "axios";
import Paragraph from "antd/es/typography/Paragraph";
import BtnDeleteNews from "./btnDeleteNews";
import BtnEditNews from "./btnEditNews";
import BtnDeleteContact from "./btnDeleteContact";
import { EditOutlined } from "@ant-design/icons";
import BtnReplyContact from "./btnReplyContact";

const ContactManager = () => {
    const [listContact, setListContact] = useState([]);
    const [page, setPage] = useState(1);
    const [messageApi, contextHolder] = message.useMessage();
    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message ? message : 'Gửi liên hệ thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Gửi liên hệ thất bại',
        });
    };
    const contactsapi = () => {
        axios.get(`http://127.0.0.1:8000/api/admin/contacts`)
            .then(res => {
                const persons = res.data.data;
                setListContact(persons);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        contactsapi();
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
            title: 'Tên người gửi liên hệ',
            dataIndex: 'name',
            key: 'name',
            width: 200,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Nội dung',
            dataIndex: 'message',
            key: 'message',
            render: (_, record) => (
                <>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                        {_}
                    </Paragraph>
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space direction="vertical" size="middle">
                    <BtnReplyContact _={_} />
                    <BtnDeleteContact id={record.id} contactsapi={contactsapi} />
                </Space>
            ),
            align: 'center',
        },
    ];
    const data = listContact;

    return (
        <>
            {contextHolder}
            <Table pagination={{ pageSize: 5, current: page, onChange: (e) => setPage(e) }} columns={columns} dataSource={data} style={{ padding: 50 }} />
        </>
    )
}
export default ContactManager;