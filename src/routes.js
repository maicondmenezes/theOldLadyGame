import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgressBar from './components/CircularProgress/CircularProgressBar';

const Login = lazy( () => import('./layout/Login'));

const Routes = () => (
  <Router>
    <Suspense fallback = {<div className = 'mt-5 pt-5'> <CircularProgressBar /> </div>} >
      <Switch>
        <Route path = '/login' component = {Login} />
        <Route exact path = '/' component = {Login} />
      </Switch>      
    </Suspense>
  </Router>
);

export default Routes;