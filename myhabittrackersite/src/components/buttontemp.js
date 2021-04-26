import { Button } from 'bootstrap';
import React from 'react';
import {NavLink} from 'react-router-dom'

const ButtonT  = () => {
    return (
        <button>
            <NavLink className="nav-link" to="/dashboard">
            dashboard
            </NavLink>
        </button>
    );
}
 
export default ButtonT ;