import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from '../pages/header'
import {PrivateRoute } from '../contexts/AppContext'
import {Dashboard } from '../pages/dashboard'
import Login from '../pages/login'
import {Public}  from '../pages/public'

const AppRouter = ()=>(
    <Router>
        <Header/>
        <Switch>
            <Route path="/public">
                <Public />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <PrivateRoute path="/dashboard">
                <Dashboard />
            </PrivateRoute>
        </Switch>
    </Router>
)

export default AppRouter;
