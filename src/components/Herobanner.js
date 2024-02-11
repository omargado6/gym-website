import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/panner.png'
function Herobanner() {
    return (
        <Box sx={{ mt: { lg: '170px', xs: '70px' }, ml: { sm: '60px' }}} className="banner-centerr">

            <Typography color="#FF2625" fontWeight="600" variant='h4' gutterBottom >Fitness Club</Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '33px' } }} gutterBottom >
                Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography variant='h5' fontFamily="Alegreya" lineHeight="20px" mb='30px'>
                Check out the most effective exercises personalized to you
            </Typography>
            
            <Button  className="search-btn" size="large" variant='contained' href='#exercise' style={{ fontSize: '22px', borderRadius: '10px', fontWeight: '600', marginTop: '15px',backgroundColor: '#FF2625', }}>
                Explore Exercises
            </Button>
            <Stack fontWeight={600} color="#FF2625" sx={{ opacity: '0.25', display: { lg: 'block', xs: 'none' }, fontSize: '200px', paddingLeft: '150px', marginTop: '15px' }}>
                Exercises
            </Stack>
            <Stack>
                <img className="hero-banner-img" src={HeroBannerImage} alt='hero-banner' style={{ position: 'absolute', top: '0', right: '40px', height: 'calc(100vh - 30px)', width: '700px', borderBottomLeftRadius: '150px' }}></img>
            </Stack>

        </Box >
    )
}

export default Herobanner