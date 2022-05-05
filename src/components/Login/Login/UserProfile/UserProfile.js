import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <Card sx={{ display: 'flex', maxWidth: '600px', mx: 'auto' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Welcome, {user.displayName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {user.email}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={user?.photoURL ? user.photoURL : "/static/images/avatar/2.jpg"}
                alt="User Image"
            />
        </Card>
    );
};

export default UserProfile;