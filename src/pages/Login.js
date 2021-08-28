import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AppContext'
import { useHistory, useLocation } from 'react-router-dom'
 
export default function Login() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const auth = useAuth();
    const callback = (body, JWR) => {
        console.log('Login callback launched');
        if(body==='OK') {
            console.log('Successfully logged in', JWR);
        }
        else{
            console.log('We cannot log in', JWR);
        }
        history.replace(from);
    };
    const onSubmit = data => {
        console.log(data);
        auth.signin(data, callback);
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="email">Email</label>
            <input id="email"type="email" defaultValue="" {...register("email", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Password</label>
            <input id="password" type="password"{...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" />
        </form>
    );
}
