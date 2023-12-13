import React from "react";
import { useState } from "react";
import axios from "axios";
import { Table, Button, Modal, message, Form, Input, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const DataEmployee2: React.FC = () => {

    // Url API
    const baseUrl = "https://reqres.in/api/users?page=1"
    const [dataSource, setDataSource] = useState<any[]>([]);

    // Modal Setting
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const modalShow = () => {
        setIsModalOpen(true);
    }

    React.useEffect(() => {
        axios.get(baseUrl)
            .then((response) => {
                setDataSource(response.data.data);
            })
            .catch((error => {
                console.error('Get Data Error', error)
            }));

    }, []);

    //From In Modal
    const onFinish = (values: any) => {
        axios.post(baseUrl, values)
            .then((response) => {
                console.log('Create data succes', response.data);

                setDataSource([...dataSource, response.data]);
            })
            .catch((error) => {
                console.log('Failed create data', error);
            });

        message.success('Data Berhasil Ditambahkan', 3);
        setIsModalOpen(false);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failder', errorInfo);
        message.error('Siliakan isi data terlebih dahulu', 3)
    }

    const handleOk = () => {
        form
            .validateFields()
            .then(() => {
                form.resetFields();
                onFinish(form.getFieldsValue());

            })
            .catch((errorInfo) => {
                console.log('Validate Failed', errorInfo);
                message.error('Silakan isi semua field yang diperlukan', 3);
            })
    }

    const handleCancle = () => {
        setIsModalOpen(false);
    }


    //data for table
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Frist Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
                <div >
                    <Button style={{ marginLeft: '10px' }} type="primary">
                        Update
                    </Button>
                    <Button style={{ marginLeft: '10px' }} danger type="primary">
                        Delete
                    </Button>
                </div>

            ),
        },
    ];

    return (
        <>
            <Button
                style={{ marginLeft: '20px', marginBottom: '20px' }}
                type="primary"
                onClick={modalShow}
                icon={<PlusOutlined />}>
                Add Data
            </Button >
            <Modal
                title="Create Data Employee"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancle}
                okText='Submit'
                width={1000}
            >

                <Form
                    form={form}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{ marginTop: '30px' }}

                >

                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="First Name"
                                name="first_name" // Corrected name
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                    },
                                ]}
                                style={{ marginRight: '20px' }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Last Name"
                                name="last_name" 
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Please input your valid email!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>






                </Form>
            </Modal>
            <Table className='table-employee' dataSource={dataSource} columns={columns}></Table>
        </>
    )

}

export default DataEmployee2;