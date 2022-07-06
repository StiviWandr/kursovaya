import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import './NavigationItems.css'
const NavigationItems = React.memo((props)=>{
    
    return (
        <ul className="NavigationItems">
            <NavigationItem to='/pages/diory' end>Diory</NavigationItem>
            <NavigationItem to='/pages/adminpanel'end>Admin Panel</NavigationItem>
        </ul>
    )
})

export default NavigationItems;