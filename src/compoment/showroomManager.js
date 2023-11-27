import { React, useEffect, useState } from "react";
import { Image, Space, Table } from 'antd';
import axios from "axios";
import Paragraph from "antd/es/typography/Paragraph";
import BtnAddShowroom from "./btnAddShowroom";
import BtnDeleteShowroom from "./btnDeleteShowroom";
import BtnEditShowroom from "./btnEditShowroom";

const ShowroomManager = () => {
    const [listShowroom, setListShowroom] = useState([]);
    const [page, setPage] = useState(1);
    const showroomapi = () => {
        axios.get(`http://127.0.0.1:8000/api/admin/showroom`)
            .then(res => {
                const persons = res.data.data;
                setListShowroom(persons);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        showroomapi();
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
            title: 'Tên cửa hàng',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: 200,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            render: (_, record) => (
                <>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                        {_}
                    </Paragraph>
                </>
            ),
            width: 500,
        },
        {
            title: 'Thời gian làm việc',
            dataIndex: 'time',
            key: 'time',
            align: 'center',
        },
        {
            title: 'Map',
            dataIndex: 'map',
            key: 'map',
            render: (_, record) => (
                <>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                        {_}
                    </Paragraph>
                </>
            ),
            align: 'center',
            width: 200
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
                    <BtnEditShowroom _={_} id={record.id} showroomapi={showroomapi}/>
                    <BtnDeleteShowroom id={record.id} showroomapi={showroomapi}/>
                </Space>
            ),
            align: 'center',
        },
    ];
    const data = listShowroom;

    return (
        <>
            <BtnAddShowroom showroomapi={showroomapi} />
            <Table pagination={{ pageSize: 5, current: page, onChange: (e) => setPage(e) }} columns={columns} dataSource={data} style={{ padding: 50 }} />
        </>
    )
}
export default ShowroomManager;