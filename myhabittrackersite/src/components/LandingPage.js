import React  from 'react';
import LoginForm from './login';
import SignUpForm from './signup';
import ButtonT from './buttontemp';

const LandingPage = () => {
    return (
        <React.Fragment>
            <LoginForm/>
            <SignUpForm/>
            <ButtonT/>
        </React.Fragment>
    );
}
 
export default LandingPage;