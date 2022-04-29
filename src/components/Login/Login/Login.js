import React from 'react';
import { Fingerprint } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import GoogleButton from 'react-google-button';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h2>Please login</h2>
            <div className='Login-btns'>
                <GoogleButton className='google-btn'
                    type="dark" // can be light or dark
                    onClick={() => { console.log('Google button clicked') }}
                />
                <IconButton aria-label="fingerprint" color="primary" size="small">
                    <Fingerprint />Sing in with Email
                </IconButton>
            </div>
        </div>
    );
};

export default Login;