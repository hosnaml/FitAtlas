import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
function HeroBanner() {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
        <Typography color="#1E73BE" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4} sx={{fontSize: {lg: '20px', xs: '18px'}}}>
            Check out the most effective exercises
        </Typography>
       <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#1E73BE', padding: '10px'}}>
        Explore Exercises
       </Button>
       <Typography fontSize="200px" fontWeight="600" color="#5BA3E0" sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}}>
        Exercise
       </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner