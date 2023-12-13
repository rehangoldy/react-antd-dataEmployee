import React, { useEffect, useState } from "react";
import { Layout, Button, Drawer } from "antd"
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons"
import { useLocation } from "react-router-dom";



const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };

    let { pathname: location } = useLocation;
    useEffect(() => {
        setVisible(false);
    }, location)


    return (
        <nav className="navbar">
            <Layout className="nav-header">
                <Layout.Header>
                    <div className="logo">
                        <h3 className="brand-font">Brand Here</h3>
                    </div>
                    <div className="navbar-menu">
                        <div className="left-menu">
                            <LeftMenu mode={"horizontal"} />
                        </div>
                        <Button className="menuButton" type="text" onClick={showDrawer}>
                            <MenuOutlined />
                        </Button>
                        <div className="right-menu">
                            <RightMenu mode={"horizontal"} />
                        </div>

                        <Drawer
                            title={"Brend Here"}
                            placement="right"
                            closable={true}
                            onClose={showDrawer}
                            visible={visible}
                            style={{ zIndex: 99999 }}
                        >
                            <LeftMenu mode={"inline"} />
                            <RightMenu mode={"inline"} />
                        </Drawer>
                    </div>
                </Layout.Header>
            </Layout>
        </nav>
    )
}

export default Navbar;