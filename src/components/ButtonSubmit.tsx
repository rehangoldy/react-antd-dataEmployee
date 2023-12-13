
import { Button, ConfigProvider, Space } from 'antd';

const ButtonSubmit: React.FC = () => {

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#440648',
                        borderRadius: 2,
                        colorBgContainer: '#0000',
                    }
                }}
            >
                <Space>
                    <Button type='primary'>Priimary</Button>
                </Space>
            </ConfigProvider>

            <div>
                <h1>ini testing</h1>
            </div>
        </>
    )
}

export default ButtonSubmit;