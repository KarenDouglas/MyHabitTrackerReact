import React  from 'react';
import LoginForm from './login';
import SignUpForm from './signup';
import ButtonT from './buttontemp';
import LandingHeader from './LandingHeader';

const LandingPage = () => {
    return (
        <React.Fragment>
            <LandingHeader/>
            <LoginForm/>
            <SignUpForm/>
            <ButtonT/>
        </React.Fragment>
    );
}
 
export default LandingPage;