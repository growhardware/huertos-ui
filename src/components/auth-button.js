import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AppContext'
import { signOut } from '../services/authService'

export const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();
    const callback = (body, JWR) => {
        history.push("/public");
        console.log('Successfully logged out', body, JWR)
    }
    return auth.user ? (
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
        <p>or Signup
            <button onClick={() => history.push("/signup")}>Sign up</button>
        </p>
        </div>
    );
}
  