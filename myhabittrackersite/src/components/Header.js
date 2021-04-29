import React, {useState} from "react";
import {Jumbotron,  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,} from "reactstrap";
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
       <React.Fragment>
           <Jumbotron fluid>
               <h1>Habit / Tracker</h1>
           </Jumbotron>
           <div className='sticky-top'>
           <Navbar color="faded" expand="md">
            <NavbarBrand href="/" className="mr-auto brand">Habit / Tracker</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2 navbar-dark" />
                <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="dashNav brand">
                    <div className="flex-container">
                        <NavLink className= "dashNavItem nav-link brand" to="/dashboard">Tasks</NavLink>
                        <NavLink className= "dashNavItem nav-link brand" to="/dashboard">Rewards</NavLink>
                        <NavLink className= "dashNavItem nav-link brand" to="/dashboard">Help</NavLink>
                    </div>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
       </React.Fragment>
    );
}
 
export default Header;