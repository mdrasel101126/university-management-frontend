import { Row, Space, Spin } from 'antd';
const Loading = () => {
    return (
        <Row justify="center" align="middle" style={{height:"100vh"}}>
            <Space>
               <Spin size="large" />
            </Space>
        </Row>
    );
};

export default Loading;