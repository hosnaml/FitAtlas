import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises'; 
   
const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
    </Box>
  )
}

export default Home