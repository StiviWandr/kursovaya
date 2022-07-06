import React from "react";
import Navibar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './Layout.css'
const Layout = () => {
    return(
        <div className="Layout">
            <Navibar/>
            <Outlet></Outlet>
        </div>
        
    )
}

export default Layout;