import React, { useState, useCallback } from 'react';
import './App.css';
import Main from './components/MainComponent'
import { BrowserRouter, Route, Redirect, } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import  store from './redux/store';
import {AuthContext} from './shared/auth-context'
import SignUpForm from './components/signup';
import Dashboard from './components/DashBoard';
import LandingHeader from './components/LandingHeader';
import Features from "./components/Features";
import Todo from './components/Todo'

const LandingPage = () => {
   
  return (
      <React.Fragment>
          <LandingHeader/>
          <Features/>
      </React.Fragment>
  );
}
function App() {
 const [isLoggedIn, setIsLoggedIn ] = useState(false);
 const [userId, setUserId ] = useState();

 const login = useCallback((uid) => {
    setIsLoggedIn(true)
    setUserId(uid);
 }, [])

 const logout = useCallback(() => {
  setIsLoggedIn(false)
  setUserId(null)
}, [])

let routes;
if(isLoggedIn){
  routes=(
    <>  
        <Route  path="/userId" render={ () => <Dashboard/>} />
        <Route path="/:userId" exact>
              <Todo/>
            </Route>
        <Redirect to="/dashboard"/>
    </>
  );
}else{
  routes= (
    <>
        <Route exact path="/landingpage" render={() => <LandingPage/> }/>
        <Route exact path="/signup" render={ () => <SignUpForm/>} />
        <Redirect to="/landingpage"/>
    </>
  );

  }

  return (
    <AuthContext.Provider value ={{isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout }}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main routes={routes} />
            
          </div>
        </BrowserRouter>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
