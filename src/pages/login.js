import React from 'react';
import { useForm } from "react-hook-form";

import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export const Login = () => {
  
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  let auth = useAuth();

  const { register, handleSubmit, errors } = useForm();
  const callback = (body, JWR) => {
    console.log('Login callback launched');
    if(body==='OK') {
        console.log('Successfully logged in', JWR);
    }
    history.replace(from);
  };
  const onSubmit = (data) => {
    auth.signin( data , callback);
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input type="text" name="email" ref={register({ required: true })} />
          {errors.email && errors.email.type === "required" && (
            <p>Email is required</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            ref={register({ required: true, minLength: 5})}
          />
          {errors.password && errors.password.type === "required" && (
            <p>Password is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>Password should be at least 5 characters</p>
          )}
        </div>
        <div>
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

