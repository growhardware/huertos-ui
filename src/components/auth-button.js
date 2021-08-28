import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AppContext'
import { signOut } from '../services/authService'

export const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();
    const callback = (body, JWR) => {
        // TODO: change this hard-code value for an environment value
        window.location.href = "http://localhost:3000";
        console.log('Successfully logged out', body, JWR)
    }
    return localStorage.getItem('user') ? (
        <p>
        Welcome!{" "}
        <button
            onClick={() => {
                signOut();
                auth.signout(callback);
                }}
        >
            Sign out
        </button>
        </p>
    ) : (
        <div>
        <p>You are not logged in.
            <button onClick={() => history.push("/login")}>Login</button>
        </p>
        <p>Or signup to get a user
            <button onClick={() => history.push("/signup")}>Sign up</button>
        </p>
        </div>
    );
}
  