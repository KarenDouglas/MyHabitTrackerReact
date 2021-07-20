import React, {useState, useContext}  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import LoadingS from './Loading';
import { AuthContext } from '../shared/auth-context';
import { useHttpClient } from '../shared/http-hook';



const LoginForm = (props) => {

  const auth = useContext(AuthContext);
  const{ isLoading, error, sendRequest, clearError} = useHttpClient();
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState([])

  
  
  
  const  submitLogin = async (e) => {
    e.preventDefault();

    setLogin([...login, {userName: username, password: password }]);
    const formData= {userName: username, password}
    try {
      const responseData = await sendRequest('http://localhost:5000/users/login', 
      'Post',
      JSON.stringify(formData),
      {
        'Content-Type': 'application/json'            
      },
  );
      auth.login(responseData.user._id);

    } catch (err) {
      alert(err.message)
    }
    

      setUsername('');
      setPassword('')
      
   
  
  
    
  
  
  
  

   }

  const userNameInputTextHandler =(e) =>{
    console.log(e.target.value);
    setUsername(e.target.value)
   
}
const passwordInputTextHandler =(e) =>{
  console.log(e.target.value);
  setPassword(e.target.value)
 
}

    

    
    const toggle = () => setModal(!modal);

        return (
            <React.Fragment>
            <div>
      <button className="login-button"  onClick={toggle}>Login</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
        {isLoading && <LoadingS/> ||
        <form>
               
                <a href="#" className="shinyButton btn btn-block btn-primary ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a className = "btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>  login With Facebook</a>
                <a href="#" className="shinyButton btn btn-block  btn-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a className = "btn btn-social-icon btn-google"><i className="fa fa-google"></i></a>  login with google</a>
                <hr/>
                <p className="form-text text-center">Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores, and cannot include any inappropriate terms.</p>
                <input className="form-control get-started" type="text" placeholder="Username" onChange={userNameInputTextHandler}/>
                <input className="form-control get-started" type="password" placeholder="Password"onChange={passwordInputTextHandler}/>
                <p className="form-text text-center">By clicking the button below, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</p>
                <button  onClick={submitLogin} className="shinyButton btn btn-block nav-link btn-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit</button>
                
               <p><NavLink className="form-text text-center nav-link" to="/signup" >Don't Have an Account?  Sign up!</NavLink></p>
            </form>}
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