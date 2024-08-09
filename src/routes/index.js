import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../pages/Header';
import { PrivateRoute } from '../contexts/AppContext';
import { Dashboard } from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { TailComponents } from '../pages/TailComponents';
import { Public } from '../pages/Public';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      {/* <Route exact path="/">
                <Public />
            </Route> */}
      <Route path="/tailcomponents">
        <TailComponents />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default AppRouter;
