import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AppContext';
import { signOut } from '../services/authService';
import { Button } from '@material-ui/core';
import PrimarySearchAppBar from '../components/AppBar'
import {Link } from "react-router-dom"

export const AuthButton = () => {

    let history = useHistory();
    let auth = useAuth();
    const callback = (JWR) => {
        history.push("/");
        console.log('Successfully logged out', JWR);
    }
    return localStorage.getItem('user') ? (
        <PrimarySearchAppBar></PrimarySearchAppBar>
    ) : (
        <div>
            <p>You are not logged in.
                <Button  onClick={() => history.push("/login")} color="primary">
                    Log in
                </Button>
            </p>
            <p>Or signup to get a user: 
                <Button  onClick={() => history.push("/signup")} color="primary">
                Sign up
                </Button>
            </p>
            <ul>
                <li>
                <Link to="/">Public Page</Link>
                </li>
                <li>
                <Link to="/dashboard">Go to my Dashboard!</Link>
                </li>
            </ul>
        </div>
    );
}
  