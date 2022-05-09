import { Container } from '@mui/material';
import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import './Home.css'
import Whyus from './Whyus/Whyus';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Whyus></Whyus>
            <Container className='content-container' maxWidth="xl">
                <About></About>
            </Container>
        </div>
    );
};

export default Home;