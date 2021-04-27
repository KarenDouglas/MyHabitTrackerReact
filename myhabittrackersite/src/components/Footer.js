import React from "react";
import {Nav} from 'reactstrap';
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <Nav navbar className="footDashNav">
            <div className="flex-container">
                <NavLink className= "footNavItem nav-link" to="/dashboard">Habit/ Tracker</NavLink>
                <NavLink className= "footNavItem nav-link" to="/dashboard">Contact Us</NavLink>
                <NavLink className= "footNavItem nav-link" to="/dashboard">Learn More</NavLink>
            </div>
        </Nav>
    );
}
 
export default Footer;