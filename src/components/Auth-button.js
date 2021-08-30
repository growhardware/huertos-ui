import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AppContext';
import { signOut } from '../services/authService';
import { Button } from '@material-ui/core';

export const AuthButton = () => {

    let history = useHistory();
    let auth = useAuth();
    const callback = (JWR) => {
        history.push("/");
        console.log('Successfully logged out', JWR);
    }
    return localStorage.getItem('user') ? (
        <div>
            <p>Welcome!{" "}</p>
            <Button  onClick={() => {
                signOut();
                auth.signout(callback);
                }} color="secondary">
                Sign out
            </Button>
        </div>
        
    ) : (
        <div>
        <p>You are not logged in.
            <Button  onClick={() => history.push("/login")} color="primary">
                Login
            </Button>
        </p>
        <p>Or signup to get a user: 
            <Button  onClick={() => history.push("/signup")} color="primary">
            Sign up
            </Button>
        </p>
        
        </div>
    );
}
  