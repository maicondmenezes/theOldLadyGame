import React, { Suspense, lazy }                  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgressBar                        from './components/CircularProgress/CircularProgressBar';

const Login      = lazy( () => import('./view/Login'));
const Register   = lazy( () => import('./view/Register'));
const GameScreen = lazy( () => import('./view/GameScreen'));

const Routes = () => (
  <Router>
    <Suspense fallback = {<div className = 'mt-5 pt-5'> <CircularProgressBar /> </div>} >
      <Switch>
        <Route exact path = '/'           component = {Login} />
        <Route path       = '/login'      component = {Login} />
        <Route path       = '/register'   component = {Register} />        
        <Route path       = '/GameScreen' component = {GameScreen} />                
      </Switch>      
    </Suspense>
  </Router>
);

export default Routes;