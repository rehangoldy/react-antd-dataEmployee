import React from "react";
import DataEmployee from "../components/DataEmployee";
import ButtonSubmit from "../components/ButtonSubmit";
import NavbarMenu from "../components/NavbarMenu";
import Navbar from "../components/Navbar/Index";
import DataEmployee2 from "../components/DataEmploye2";


const Home: React.FC = () => {
    return (
        <div>
            <NavbarMenu/>
            <h1 className="header-text">Employee Data</h1>
            <DataEmployee2/>
            
        </div>
    )
}

export default Home;