import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import LoginForm from './login';
import SignUpForm from './signup';
import ButtonT from './buttontemp';
import Dashboard from './DashBoard';
import Footer from './Footer'


const LandingPage = () => {
    return (
        <React.Fragment>
            <LoginForm/>
            <SignUpForm/>
            <ButtonT/>
        </React.Fragment>
    );
}

const Main = () => {
    
    return (
        <React.Fragment>
        <Switch>
            <Route exact path="/landingpage" render={() => <LandingPage/> }/>
            <Route exact path="/dashboard" render={ () => <Dashboard/>} />
            <Redirect to="/landingpage"/>
        </Switch>
        <Footer/>
        </React.Fragment>
    );
}
 
export default Main ;