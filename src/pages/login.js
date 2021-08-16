import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      auth.signin( (body, JWR) => {
        console.log('Login callback launched');
        if(body==='OK') {
            console.log('Successfully logged in', JWR);
        }
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
}
/*
function authCallback(user){
    console.log('Auth callback launched');
    if(user.id){
        console.log(user);
    }
}
*/
