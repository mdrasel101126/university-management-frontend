import { Row, Space } from "antd";
import Image from "next/image";
import notFoundImage from '../assets/not-found.svg';

const NotFoundPage = () => {
    return (
        <Row justify="center" align="middle" style={{height:"100vh"}}>
            <Space>
               <Image src={notFoundImage} width={300} alt="not-found-image"/>
            </Space>
        </Row>
    );
};

export default NotFoundPage;