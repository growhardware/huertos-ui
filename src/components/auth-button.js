import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();

    return auth.user ? (
        <p>
        Welcome!{" "}
        <button
            onClick={() => {
            auth.signout(() => history.push("/"));
            }}
        >
            Sign out
        </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}
  