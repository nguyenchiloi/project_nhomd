import { React, useEffect, useState } from "react";
import { Image, Space, Table } from 'antd';
import axios from "axios";
import Paragraph from "antd/es/typography/Paragraph";
import BtnAddNews from "./btnAddNews";
import BtnDeleteNews from "./btnDeleteNews";
import BtnEditNews from "./btnEditNews";

const NewsManager = () => {
    const [listNews, setListNews] = useState([]);
    const [page, setPage] = useState(1);
    const newsapi = () => {
        axios.get(`http://127.0.0.1:8000/api/admin/news`)
            .then(res => {
                const persons = res.data.data;
                setListNews(persons);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        newsapi();
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
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            width: 250,
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
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'photo',
            key: 'photo',
            render: (_, record) => (
                <><Image
                    width={100}
                    height={100}
                    src={`./img/${_}`}
                /></>
            ),
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space direction="vertical" size="middle">
                    <BtnEditNews _={_} id={record.id} newsapi={newsapi}/>
                    <BtnDeleteNews id={record.id} newsapi={newsapi} />
                </Space>
            ),
            align: 'center',
        },
    ];
    const data = listNews;

    return (
        <>
            <BtnAddNews newsapi={newsapi} />
            <Table pagination={{ pageSize: 5, current: page, onChange: (e) => setPage(e) }} columns={columns} dataSource={data} style={{ padding: 50 }} />
        </>
    )
}
export default NewsManager;