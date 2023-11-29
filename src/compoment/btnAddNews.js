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

const BtnAddNews = ({newsapi}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [description, setDescription] = useState("");
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();
    const [title, setTitleProduct] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const photo = fileList[0]?.originFileObj.name;
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Thêm tin tức thành công',
        });
    };
    const error = (message) => {
        messageApi.open({
            type: 'error',
            content: message ? message : 'Thêm tin tức thất bại',
        });
    };
    const handlesubmit = (e) => {
        fetch('http://127.0.0.1:8000/api/admin/new/create', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ title, description, photo })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                success();
                setIsModalVisible(false);
                form.resetFields();
                newsapi();
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
    return (
        <>
            {contextHolder}
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal} size="large" style={{ background: "green", marginLeft: 20 }}>Thêm</Button>
            <Modal
                title="Thêm tin tức"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                onOk={handlesubmit}
            >
                <Form form={form} layout="vertical" onFinish={handlesubmit}>
                    <Row className="d-flex" justify="start" gutter={[0, 15]}>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="title"
                                label="Tiêu đề:"
                                rules={[{ required: true, message: 'vui lòng nhập tên tin tức' }]}
                            >
                                <Input maxLength={50} placeholder="Nhập tiêu đề" name="title" onChange={e => setTitleProduct(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="description"
                                label="Mô tả"
                                rules={[{ required: true, message: 'vui lòng nhập mô tả' }]}
                            >
                                <TextArea maxLength={500} placeholder="Nhập mô tả" name="description" onChange={e => setDescription(e.target.value)}/>
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
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default BtnAddNews;