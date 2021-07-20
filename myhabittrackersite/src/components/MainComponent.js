import React, { useContext, useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import LoginForm from './login';
import SignUpForm from './signup';
import Dashboard from './DashBoard';
import Footer from './Footer'
import LandingHeader from './LandingHeader';
import Features from "./Features";
import { AuthContext } from '../shared/auth-context';





const Main = ({routes }) => {
    const auth = useContext(AuthContext)
    const [isLoggedIn, setIsLoggedIn ] = useState(false);



    return (
        <React.Fragment>
        <Switch>
           {routes}
        </Switch>
        <Footer/>
        </React.Fragment>
    );
}
 
export default withRouter((Main));