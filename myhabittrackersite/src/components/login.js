import React, {useState}  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {NavLink} from 'react-router-dom';


const LoginForm = (props) => {
    const {
        loginButton,
        className
      } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

        return (
            <React.Fragment>
            <div>
      <Button onClick={toggle}>Login</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
        <form>
                
                <a href="#" className="shinyButton btn btn-block btn-primary ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a className = "btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>  login With Facebook</a>
                <a href="#" className="shinyButton btn btn-block  btn-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a className = "btn btn-social-icon btn-google"><i class="fa fa-google"></i></a>  login with google</a>
                <hr/>
                <p className="form-text text-center">Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores, and cannot include any inappropriate terms.</p>
                <input className="form-control get-started" type="text" placeholder="Username"/>
                <input className="form-control get-started" type="password" placeholder="Password"/>
                <p className="form-text text-center">By clicking the button below, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</p>
                <NavLink to="/dashboard" className="shinyButton btn btn-block nav-link btn-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit</NavLink>
                
               <p><NavLink className="form-text text-center nav-link" to="/signup" >Don't Have an Account?  Sign up!</NavLink></p>
            </form>
        </ModalBody>
        <ModalFooter>
        <NavLink className="nav-link" to="/dashboard">
          <Button color="primary">Login</Button>{' '}
        </NavLink>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
            
            </React.Fragment>
        );
    
};
 
export default LoginForm;