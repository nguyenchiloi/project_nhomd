import { React, useEffect, useState } from "react";
import { Image, Space, Table, Tag } from 'antd';
import axios from "axios";
import Paragraph from "antd/es/typography/Paragraph";
import BtnAddNews from "./btnAddNews";
import BtnDeleteNews from "./btnDeleteNews";
import BtnEditNews from "./btnEditNews";
import moment from "moment";
import BtnUpdateOrder from "./btnUpdateOrder";

const OderManager = () => {
    const [listOder, setListOder] = useState([]);
    const [page, setPage] = useState(1);
    const oderapi = () => {
        axios.get(`http://127.0.0.1:8000/api/admin/index-payment`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                setListOder(persons);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        oderapi();
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
            title: 'Tên người đặt hàng',
            dataIndex: 'name',
            key: 'name',
            width: 250,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'total_bill',
            key: 'total_bill',
            render: (_) => {
                return (
                    <>{_} $</>
                )

            }
        },
        {
            title: 'Ngày đặt hàng',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (_, index) => {
                const date = moment(_);
                return date.format('DD/MM/yyyy');
            },
            align: 'center',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => (
                <>
                    {_ === 0 ? <Tag color="red">Hủy đơn hàng</Tag>
                        : _ === 1 ? <Tag color="gold">Chờ xác nhận</Tag>
                            : _ === 2 ? <Tag color="lime">Đang vận chuyển</Tag>
                                : _ === 3 ? <Tag color="green">Đã nhận hàng</Tag>
                                    : ''}
                </>
            ),
            align: 'center'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space direction="vertical" size="middle">
                    <BtnUpdateOrder _={_} id={record.id} oderapi={oderapi}/>
                </Space>
            ),
            align: 'center',
        },
    ];
    const data = listOder;

    return (
        <>
            <Table pagination={{ pageSize: 5, current: page, onChange: (e) => setPage(e) }} columns={columns} dataSource={data} style={{ padding: 50 }} />
        </>
    )
}
export default OderManager;