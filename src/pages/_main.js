import React from 'react'
import { PrivateRoute } from '../hooks/use-auth'
import { AuthButton } from '../components/auth-button'
import { Dashboard } from './dashboard'
import { Login } from './login'
import { Public } from './public'
import { Switch, Route, Link, } from "react-router-dom"

const MainPage = () => {
    return (
        <div>
            <AuthButton />
            <ul>
                <li>
                <Link to="/public">Public Page</Link>
                </li>
                <li>
                <Link to="/dashboard">Go to my Dashboard!</Link>
                </li>
            </ul>
            <hr/>
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
        </div>
    );
}
  
export default MainPage;