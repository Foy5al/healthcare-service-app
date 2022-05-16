import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    let { user, isLogin } = useAuth();
    //this is used for solve reload to redirect login issue
    if (isLogin) {
        return <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh',
            mx: 'auto',
            mt: 10
        }}>
            <Box sx={{ width: '80%', mx: 'auto' }}>
                <Skeleton />
                <Skeleton variant="rectangular"
                    width={'50%'}
                    height={110} animation="wave" />
                <Skeleton variant="rectangular"
                    width={'100%'}
                    height={110} animation="wave" />
                <Skeleton animation="wave" />
            </Box>
        </Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;