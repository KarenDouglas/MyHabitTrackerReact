import React, {useState} from 'react';
import {Jumbotron,  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button} from "reactstrap";
import {NavLink} from 'react-router-dom';
import Login from './login';


const LandingHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
           <Jumbotron fluid>
               <h1>Habit / Tracker</h1>
           </Jumbotron>
           <div>
           <Navbar color="faded" light expand="md">
            <NavbarBrand href="/" className="mr-auto">Habit / Tracker</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="landingNav">
                    <div className="flex-container">
                        <NavLink className= "landingNavItem nav-link" to="/signup">Get Started!</NavLink>
                        <NavLink className= "landingNavItem nav-link" to="/landingpage">Learn More</NavLink>
                        
                    </div>
                </Nav>
                <span className="navbar-text ml-auto">
                    <Login/>
                </span>
                </Collapse>
            </Navbar>
            </div>
       </React.Fragment>

    );
}
 
export default LandingHeader;