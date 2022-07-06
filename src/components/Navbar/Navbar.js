import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navibar = () => {
    return (
        <header> 
            <div className='Navbar_logo'></div>
            <NavigationItems/>
        </header>
    )
}

export default Navibar;