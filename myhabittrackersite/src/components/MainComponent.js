import React, { Component } from 'react';
import LandingPage from './LandingPage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';





const Main = () => {
    const LandingPage = () =>{
        return(
            <LandingPage/>
        )
    }
    return (
        <Switch>
            <Route path="/LandingPage" component= {LandingPage}/>
            <Redirect to="/LandingPage"/>
        </Switch>
    );
}
 
export default Main ;