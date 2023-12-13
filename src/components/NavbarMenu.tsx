import React from 'react';
import { Menu, Layout, Typography } from 'antd';
import { HomeOutlined, ProfileOutlined, ContactsOutlined } from '@ant-design/icons';


const NavbarMenu: React.FC = () => {
    const {Header} = Layout;
    const {Title} = Typography;
    
    return (
       
            // <Menu style={{padding: '20px'}} theme="light" mode="horizontal"  defaultSelectedKeys={['home']}>
            //     <Menu.Item key="home" icon={<HomeOutlined />}>
            //         Home
            //     </Menu.Item>
            //     <Menu.Item key="profile" icon={<ProfileOutlined />}>
            //         Profile
            //     </Menu.Item>
            //     <Menu.Item key="contacts" icon={<ContactsOutlined />}>
            //         Contacts
            //     </Menu.Item>
            // </Menu>

            <Menu items={[
                {key: "home", icon:<HomeOutlined />, label: "Home" },
                {key: "profile", icon:<ProfileOutlined />, label: "Profile" },
                {key: "contact", icon:<ContactsOutlined />, label: "Contacts" },
            ]} style={{padding: '20px'}} theme="light" mode="horizontal"  defaultSelectedKeys={['home']}/>

            
        
    );
}


export default NavbarMenu;