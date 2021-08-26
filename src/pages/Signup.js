
import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AppContext'
import { useHistory, useLocation } from 'react-router-dom'
import { signUp } from '../services/authService'

export default function Signin() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const auth = useAuth();
    const callback = (body, JWR) => {
        console.log('Signup callback launched');
        if(body==='OK') {
            console.log('Successfully signed up', JWR);
        }
        else{
            console.log('We cannot sign up', JWR);
        }
        history.replace(from);
    };
    const onSubmit = data => {
        signUp(data)
        console.log(data);
        auth.signup(data, callback);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="FullName">Fullname</label>
        <input id="FullName "type="fullname"{...register("fullName", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <label htmlFor="Email">Email</label>
        <input id="Email"type="email" defaultValue="" {...register("emailAddress", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <label htmlFor="Password">Password</label>
        <input id="Password" type="password"{...register("password", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <label htmlFor="RememberMe">Remember me</label>
        <input id="RememberMe" type="checkbox"{...register("rememberMe", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
        </form>
    );
}