import React from 'react';
import { Box, Chip, Container, Divider, Grid, IconButton, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from '@mui/icons-material/Email';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import './Footer.css';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

const Footer = () => {
    return (
        <footer>
            <Box sx={{ bgcolor: 'secondary.main', color: 'text.secondary', pb: 2 }}>
                <Container maxWidth="xl">
                    <Grid container
                        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid sx={{ m: 'auto' }} item xs={12} sm={6} md={4}>
                            <Box> <Typography
                                variant="h6"
                                component="div"
                                sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
                            > <HealingTwoToneIcon color='primary'
                                fontSize='large' />
                                Health Haven Hospital
                            </Typography>
                                <Divider />
                            </Box>

                            <Box>
                                <Typography>
                                    <LocationCityIcon fontSize='small' />Tejgaon I/A, Dhaka-1208
                                </Typography>
                            </Box>

                            <Box>
                                <a className='text-style' href="mailto:mh.foysal.h@gmail.com"><EmailIcon fontSize='small' />mh.foysal.h@gmail.com</a>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Our Services" />
                                </Divider>
                            </Root>

                            <Box><Link to='/home' color='inherit'>Home</Link></Box>

                            <Box><Link to='/' color='inherit'>Privacy</Link></Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Find us on social media" />
                                </Divider>
                            </Root>

                            <Box><Link to='/home' color='inherit'>Home</Link></Box>

                            <Box><Link to='/' color='inherit'>Privacy</Link></Box>
                        </Grid>

                    </Grid>
                    <center>Develop by <a className='text-style' href="https://github.com/Foy5al" target="_blank" rel="noreferrer noopener">Mohammd Foysal</a> with 🖤 ©2022</center>
                </Container>
            </Box>

        </footer >
    );
};

export default Footer;