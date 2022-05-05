import React from 'react';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import GoogleButton from 'react-google-button';
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import UserProfile from './UserProfile/UserProfile';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { Fingerprint } from '@mui/icons-material';

const Login = () => {
    const { singInUsingGoogle, user } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div className='content-container'>
            <Container maxWidth="xl">
                {
                    user?.email ? <>
                        <UserProfile />
                    </> : <>
                        {/* if user is logout */}
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    marginBottom: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                    <LoginIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        <Fingerprint /> Login
                                    </Button>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link className='body-link-text-style' to="/register" variant="body2">
                                                New here? Register
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    {/* google btn */}
                                    <Grid container sx={{ mt: 2, mb: 3 }} justifyContent="flex-end">
                                        <Grid item>
                                            <GoogleButton className='google-btn'
                                                type="dark" // can be light or dark
                                                onClick={singInUsingGoogle}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </>
                }
            </Container>
        </div>
    );
};

export default Login;