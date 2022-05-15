import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }} >
            <Container maxWidth="xl">
                <Typography sx={{ mx: 2, p: 2, textAlign: "center" }}
                    variant='h3'>
                    All-in-One Website Health Solution
                </Typography>

                <Typography sx={{ mx: 2, p: 2, textAlign: "center" }}
                    variant='h6'>
                    10 Years Of Experience in Medical Services
                </Typography>

                <Typography sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
                    variant='p'>One big thing I wanted to highlight is that our methodology is fairer to hospitals and health systems than horizontal sites. CareDash has many hospital reviews from real users, but the way we survey our patient users has less “motivated complainer bias.” Thus, I think the CareDash hospital reviews provider a more accurate view of real patient satisfaction. <br /><br />

                    We think something between 8 to 9 out of 10 patients walks out of the hospital satisfied, but typical web reviews make hospitals look much worse. This negative bias in hospital reviews is a big deal because people are walking into their care journey with a negative mindset about the care they are going to get, and that’s not good. The scale is just off because of the motivated complainers.<br /><br />

                    Be sure to leave a review on <strong>Health Haven</strong> of any hospital you’ve visited, whether you’ve had a negative or a positive experience. Share your suggestions about writing hospital reviews in the comments below or message us on facebook <a href="https://www.facebook.com/iamfoysal.h" target="_blank" rel="noopener noreferrer" >
                        @Foysal
                    </a>.
                    <br /><br /><br />
                </Typography>

            </Container>
        </Box>
    );
};

export default About;