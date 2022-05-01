import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Notfound = () => {
    return (
        <>
            <Container className='content-container' sx={{ mx: 'auto', my: '20px' }} maxWidth="xl">
                <Box sx={{ mx: 'auto', my: '20px', height: "50%", width: '50%' }}>
                    <img style={{ height: "50%", width: "50%" }} src="https://i.ibb.co/9Zr4rwK/image.png" alt="404 error image" />
                    <Typography sx={{ mx: 'auto' }}>404 Page is not found Please check the url</Typography>
                </Box>
            </Container>

        </>
    );
};

export default Notfound;