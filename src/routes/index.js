import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../pages/Header';
import { PrivateRoute } from '../contexts/AppContext';
import { Dashboard } from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { TailComponents } from '../pages/TailComponents';
import { Public } from '../pages/Public';
import DevPage from '../pages/DevPage';

const AppRouter = () => (
  <Router>
    {/* <Header /> */}
    <Switch>
      {/* <Route exact path="/">
                <Public />
            </Route> */}
      <Route path="/devlist">
        <TailComponents />
      </Route>
      <Route path="/dev">
        <DevPage />
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
