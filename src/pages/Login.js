import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AppContext'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Login() {
    const classes = useStyles();

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
        <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
        
         <TextField required id="email" label="Email" type="email" defaultValue="" {...register("email", { required: true })}/>
         {errors.exampleRequired && <span>This field is required</span>}
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register("password", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button type="submit" variant="contained">Login</Button>
        
        </form>
        
    );
}
