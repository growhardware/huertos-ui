import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AppContext'

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
                auth.signout(callback);
                }}
        >
            Sign out
        </button>
        </p>
    ) : (
        <p>You are not logged in.
            <button onClick={() => history.push("/login")}>Login</button>
        </p>
    );
}
  