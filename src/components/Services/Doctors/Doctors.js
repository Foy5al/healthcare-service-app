import React from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { HashLink } from 'react-router-hash-link';
import useDocData from '../../../Hooks/useDocData';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Doctors = () => {

    const doctors = useDocData();


    return (
        <div id='doctors'>
            <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
                <Container maxWidth="xl">
                    <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                        variant='h6'
                    >Our Services
                    </Typography>

                    <Grid container spacing={3}>
                        {
                            doctors[0]?.map((doctor) => (
                                <Grid key={doctor.doc_id} item xs={12} md={6} lg={3}>
                                    <Card sx={{
                                        maxWidth: 345, transition: '0.5s all ease-in-out', ':hover': {
                                            boxShadow: 10,
                                            color: '#e91e63'
                                        }
                                        , 'img': { transition: '0.5s all ease-in-out' },
                                        ':hover img': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}>
                                        <CardActionArea>

                                            <Avatar
                                                alt="doctor image"
                                                src={doctor?.doc_img}
                                                sx={{
                                                    width: 256, height: 256, mx: 'auto'
                                                }}
                                            />

                                            <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>

                                                <Typography gutterBottom variant="h5" component="div">
                                                    specialist in {doctor.specialize}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions sx={{ textAlign: "center" }}>
                                            <Button sx={{ mt: 2, mb: 1 }} variant="contained" className="CheckButton">
                                                Make an Appointment
                                                <AddCircleIcon />
                                            </Button>
                                        </CardActions>
                                    </Card>



                                </Grid>
                            ))
                        }
                    </Grid>

                    <HashLink smooth to="/home#home" className='text-style'> <Button variant="contained" startIcon={<HomeIcon />} sx={{ mb: 5, mt: 5 }}>
                        Back to Home
                    </Button></HashLink>


                </Container>
            </Box>

        </div>
    );
};

export default Doctors;