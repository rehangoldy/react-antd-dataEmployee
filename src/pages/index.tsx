import React from "react";
import { Button, ConfigProvider, Space, Col, Row } from "antd";
import '../assets/index.css';
import { AppleOutlined } from '@ant-design/icons';


const Index: React.FC = () => {
    return (
        <div id="index-main">
            <h1>Ini halaman Index</h1>
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: '#440648',
                        borderRadius: 2,

                        // Alias Token
                        colorBgContainer: '#000000',
                    },
                }}
            >

                <Space>
                    <Button className="container btn-testing" type="primary" icon={<AppleOutlined />}>Button Primary</Button>
                </Space>
            </ConfigProvider>


            <div className="coba-column">
                <Row gutter={6}>
                    <Col span={6}>
                        <div style={{ backgroundColor: 'wheat', textAlign: 'center' }}>Ini colum 16 pixel</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ backgroundColor: 'wheat', textAlign: 'center' }}>Ini colum 16 pixel</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ backgroundColor: 'wheat', textAlign: 'center' }}>Ini colum 16 pixel</div>
                    </Col>
                    <Col span={6}>
                        <div style={{ backgroundColor: 'wheat', textAlign: 'center' }}>Ini colum 16 pixel</div>
                    </Col>
                </Row>
            </div>


        </div>
    )
}

export default Index;