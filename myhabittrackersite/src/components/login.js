import React  from 'react';



const LoginForm = () => {
        return (
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
                <a href="#" className="shinyButton btn btn-block  btn-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit</a>
                
               <p><a className="form-text text-center" >  Already have an accout? Log in!</a></p>
            </form>
        );
    
};
 
export default LoginForm;