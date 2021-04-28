import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import LoginForm from './login';
import SignUpForm from './signup';
import ButtonT from './buttontemp';
import Dashboard from './DashBoard';
import Footer from './Footer'
import LandingHeader from './LandingHeader';
import Features from "./Features";


const LandingPage = () => {
   
    return (
        <React.Fragment>
            <LandingHeader/>
            <Features/>
            <SignUpForm/>
        </React.Fragment>
    );
}

const Main = () => {
    
    return (
        <React.Fragment>
        <Switch>
            <Route exact path="/landingpage" render={() => <LandingPage/> }/>
            <Route exact path="/dashboard" render={ () => <Dashboard/>} />
            <Route exact path="/login" render={ () => <LoginForm/>} />
            <Route exact path="/signup" render={ () => <SignUpForm/>} />
            <Redirect to="/landingpage"/>
        </Switch>
        <Footer/>
        </React.Fragment>
    );
}
 
export default Main ;