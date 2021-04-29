import React  from 'react';
import { Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import Login from './login';


const SignUpForm = () => {
  
        return (
            <form className="signup-form">
                
                <a href="#" className="shinyButton btn btn-block btn-info ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a className = "btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>  Sign Up With Facebook</a>
                <a href="#" className="shinyButton btn btn-block  btn-info">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a className = "btn btn-social-icon btn-google"><i class="fa fa-google"></i></a>  Sign Up with google</a>
                <hr/>
                <p className="form-text text-center">Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores, and cannot include any inappropriate terms.</p>
                <input className="form-control get-started" type="text" placeholder="Username"/>
                <input className="form-control get-started" type="email" placeholder="Email"/>
                <input className="form-control get-started" type="password" placeholder="Password"/> 
                <input className="form-control  get-started" type="password" placeholder="Confirm Password"/>
                <p className="form-text text-center">By clicking the button below, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</p>
                <NavLink to="/dashboard" className="shinyButton btn btn-block nav-link btn-info">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit</NavLink>
            </form>
        );
    
};
 
export default SignUpForm;