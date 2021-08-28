import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AppContext'
import { signOut } from '../services/authService'
import Button from '@material-ui/core/Button';

export const AuthButton = () => {

    let history = useHistory();
    let auth = useAuth();
    const callback = (body, JWR) => {
        //history.push("/public");
        // TODO: change this hard-code value for an environment value
        window.location.href = "http://localhost:3000";
        console.log('Successfully logged out', body, JWR)
    }
    return localStorage.getItem('user') ? (
        <p>
        Welcome!{" "}
        <Button  onClick={() => {
                signOut();
                auth.signout(callback);
                }} color="secondary">
            Sign out
        </Button>

        </p>
        
    ) : (
        <div>
        <p>You are not logged in.
            <Button  onClick={() => history.push("/login")} color="primary">
                Login
            </Button>
        </p>
        <p>Or signup to get a user
            <Button  onClick={() => history.push("/signup")} color="primary">
            Sign up
            </Button>
        </p>
        
        </div>
    );
}
  