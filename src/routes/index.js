import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from '../pages/Header' 
import {PrivateRoute } from '../contexts/AppContext'
import {Dashboard } from '../pages/Dashboard'
import Login from '../pages/Login'
import {Public}  from '../pages/Public'

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
