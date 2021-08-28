
import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AppContext'
import { useHistory, useLocation } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Signin() {

    const classes = useStyles();

    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
        console.log(data);
        auth.signup(data, callback);
    }

    return (
        
        <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
        <TextField required id="fullName" label="Full Name" type="text" {...register("fullName", { required: true })}/>      
        {errors.exampleRequired && <span>This field is required</span>}
        <TextField required id="email" label="Email" type="email" defaultValue="" {...register("emailAddress", { required: true })}/>
        {errors.exampleRequired && <span>This field is required</span>}
        <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        {...register("password", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Checkbox
            // color="primary"
            // checked={checked}
            // onChange={handleChange}
            // inputProps={{ 'aria-label': 'primary checkbox' }}
            id="RememberMe"
            //{...register("rememberMe", { required: true })}
        />
        <Button type="submit" variant="contained">Login</Button>

        </form>
    );
}