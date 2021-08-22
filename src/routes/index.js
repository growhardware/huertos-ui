import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MainPage from '../pages/Main'
import {PrivateRoute } from '../contexts/AppContext'
import {Dashboard } from '../pages/Dashboard'
import {Login}  from '../pages/Login'
import {Public}  from '../pages/Public'

const AppRouter = ()=>(
    <Router>
        <Switch>
            <Route path="/">
                <MainPage />
            </Route>
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
