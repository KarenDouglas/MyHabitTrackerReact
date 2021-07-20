import React, {useState}  from 'react';
import {NavLink} from 'react-router-dom';
import Login from './login';
import LoadingS from './Loading';


const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [points, setPoints]= useState(0);
    const [signup, setSignup] = useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError]= useState();

    const  submitSignup= async (e) => {
        e.preventDefault();
        setSignup([...signup, {userName: username, points: points, email: email, password: password }]);
        const formData= {userName: username, points, email, password}
        setIsLoading(true);
        fetch('http://localhost:5000/users/signup', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(formData)
        }); 

        setIsLoading(false)
        setUsername('');
        setPassword('')
      }

      const userNameInputTextHandler =(e) =>{
        console.log(e.target.value);
        setUsername(e.target.value)
      }
      const emailInputTextHandler =(e) =>{
        console.log(e.target.value);
        setEmail(e.target.value)
       
      }
      const passwordInputTextHandler =(e) =>{
        console.log(e.target.value);
        setPassword(e.target.value)
       
      }
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
                <input className="form-control get-started" type="text" placeholder="Username" onChange={userNameInputTextHandler}/>
                <input className="form-control get-started" type="email" placeholder="Email" onChange={emailInputTextHandler}/>
                <input className="form-control get-started" type="password" placeholder="Password" onChange={passwordInputTextHandler}/> 
                <input className="form-control  get-started" type="password" placeholder="Confirm Password"/>
                <p className="form-text text-center">By clicking the button below, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</p>
                
                <NavLink to="/dashboard"onClick={submitSignup} className="shinyButton btn btn-block nav-link btn-info">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit</NavLink>
            </form>
        );
    
};
 
export default SignUpForm;