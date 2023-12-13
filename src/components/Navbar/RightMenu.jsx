import React from "react";
import { Menu, Avatar } from 'antd';
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons"

const RightMenu = ({ mode }) => {
    return (
        <Menu mode={mode}>
            <Menu.SubMenu
                title={
                    <>
                        <Avatar icon={<UserOutlined />} />
                        <span className="username">jhonedhoe</span>
                    </>
                }
            >
                <Menu.Item key="project">
                    <CodeOutlined />
                    Project
                </Menu.Item>
                <Menu.Item key="profile">
                    <UserOutlined />
                    Profile
                </Menu.Item>
                <Menu.Item key="logout">
                    <LogoutOutlined />
                    Log Out
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}

export default RightMenu;