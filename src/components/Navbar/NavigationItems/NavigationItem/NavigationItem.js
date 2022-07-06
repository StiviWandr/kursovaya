import React from "react";
import { NavLink } from "react-router-dom";
import './NavigationItem.css'

const NavigationItem = React.memo(({to, end, children})=>{
    return(
    <li className="NavigationItem">
        <NavLink to={to} end={end} className="link">{children}</NavLink>
    </li>)
})

export default NavigationItem;