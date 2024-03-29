import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storag';
import { useRouter } from 'next/navigation';

const { Header:AntHeader } = Layout;

const Header = () => {
    const router= useRouter();
    const {role}=getUserInfo() as any;
    const logOut=()=>{
        removeUserInfo(authKey);
        router.push("/login");
    }
    const items:MenuProps['items']=[
        {
            key:"0",
            label:<Button onClick={()=>logOut()} type='text' danger>Logout</Button>
        }
    ]
    return (
        <AntHeader style={{
            background:"#fff"
        }}>
            <Row justify="end" align="middle" style={{height:"100%"}}>
                <p style={{margin:"0 4px", fontWeight:"bold"}}>{role}</p>
                <Dropdown menu={{items}}>
                    <a href="">
                    <Space wrap size={16}>
                    <Avatar size="large" icon={<UserOutlined />} />
                    </Space></a>
                </Dropdown>
            </Row>
        </AntHeader>
    );
};

export default Header;