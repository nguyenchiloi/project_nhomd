import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect, useState } from "react";
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const BtnAddProduct = ({ productapi }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();
    const [name, setNameProduct] = useState("");
    const [money, setMoney] = useState("");
    const [description, setDescription] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const photo = fileList[0]?.originFileObj.name;
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Thêm sản phẩm thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Thêm sản phẩm thất bại',
        });
    };
    const handlesubmit = async (e) => {
        // e.preventDefault();
        let regobj = { name, description, money, photo, category_id };
        const response = await fetch('http://127.0.0.1:8000/api/admin/products/add-product', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                setIsModalVisible(false);
                productapi();
                form.resetFields();
                setFileList([])
            } else {
                error(data.message);
            }
        }).catch((err) => {
            error();
        })

    }
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleCancelImg = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const handleChangeCategory = (value) => {
        setCategory_id(value);
    };
    return (
        <>
            {contextHolder}
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal} size="large" style={{background: "green", marginLeft: 20}}>Thêm</Button>
            <Modal
                title="Thêm sản phẩm"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                onOk={handlesubmit}
            >
                <Form form={form} layout="vertical" onFinish={handlesubmit}>
                    <Row className="d-flex" justify="start" gutter={[0, 15]}>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="name"
                                label="Tên sản phẩm:"
                                rules={[{ required: true, message: 'vui lòng nhập tên sản phẩm' }]}
                            >
                                <Input placeholder="Nhập tên sản phẩm" name="name" onChange={e => setNameProduct(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="money"
                                label="Giá bán"
                                rules={[{ required: true, message: 'vui lòng nhập giá bán' }]}
                            >
                                <Input type="number" placeholder="Nhập giá bán" name="money" onChange={e => setMoney(e.target.value)}></Input>
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="photo"
                                label="Hình ảnh:"
                                rules={[{ required: true, message: 'vui lòng nhập hoặc chọn file ảnh' }]}
                            >
                                <Upload
                                    listType="picture-circle"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                    <img
                                        alt="example"
                                        style={{
                                            width: '100%',
                                        }}
                                        src={previewImage}
                                    />
                                </Modal>
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="category_id"
                                label="Danh mục"
                                rules={[{ required: true, message: 'vui lòng chọn thể loại' }]}
                            >
                                <Select
                                    style={{ width: 470 }}
                                    onChange={handleChangeCategory}
                                    options={[
                                        { value: 1, label: 'Màn hình' },
                                        { value: 2, label: 'Điện thoại' },
                                        { value: 3, label: 'Chuột Gaming' },
                                        { value: 4, label: 'Tai nghe' },
                                        { value: 5, label: 'Bàn phím' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="description"
                                label="Mô tả"
                                rules={[{ required: true, message: 'vui lòng nhập mô tả' }]}
                            >
                                <TextArea placeholder="Nhập mô tả" name="description" onChange={e => setDescription(e.target.value)}></TextArea>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default BtnAddProduct