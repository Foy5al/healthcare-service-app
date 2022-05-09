import React from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
import useData from '../../../Hooks/useData';
import HomeIcon from '@mui/icons-material/Home';

const ServiceDetails = () => {
    const { servId } = useParams();
    console.log(servId);
    const [service, setServices] = useState([])
    const mainData = useData();
    let services = mainData[0];
    console.log(services);

    // handle undifined problem in mapping data
    useEffect(() => {
        if (services.length > 1) {
            const servDetails = services?.find(service => service.id === parseInt(servId));
            console.log(servDetails);
            setServices(servDetails);
        }
        else {
            console.log('waitting for data');
        }
    }, [services]);

    return (
        <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, textAlign: "center" }}>
            <Container maxWidth="xl">
                <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                    variant='h6'
                >Why Choose Our Medical
                </Typography>

                <Typography sx={{ mb: 8, fontWeight: 600 }}
                    variant='h5'
                >Breakthrough in Comprehensive, Flexible Care Delivery Models
                </Typography>

                {
                    services?.length > 1 && <Grid container spacing={3}>

                        {
                            <Grid key={service.id} item xs={12} md={12} lg={12}>

                                <Card sx={{
                                    mx: 'auto',
                                    maxWidth: 550, transition: '0.5s all ease-in-out', ':hover': {
                                        boxShadow: 10
                                    }
                                    , 'img': { transition: '0.5s all ease-in-out' },
                                    ':hover img': {
                                        transform: 'scale(1.1)'
                                    }
                                }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            width="100%"
                                            height="550px"
                                            image={service?.service_img}
                                            alt="card image of service"
                                        />
                                        <CardContent sx={{ display: 'flex', justifyContent: 'center', mx: 'auto', my: 2 }}>
                                            <Avatar
                                                alt="service icon"
                                                src={service?.icon}
                                                sx={{
                                                    width: 40, height: 40, mx: 'auto'
                                                }}
                                            />
                                            <Typography gutterBottom variant="h5" component="div">
                                                Consult for {service.treatment}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Typography align="justify" gutterBottom variant="p" component="div">
                                            {service.description}
                                        </Typography>
                                    </CardActions>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Consult fee {service.price}
                                    </Typography>
                                </Card>




                            </Grid>
                        }
                    </Grid>}

                <HashLink smooth to="/home#home" className='text-style'> <Button variant="contained" color="primary" startIcon={<HomeIcon />} sx={{ mb: 5, mt: 5 }}>
                    Back to Home
                </Button></HashLink>


            </Container>
        </Box>
    );
};

export default ServiceDetails;