import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises'; 
   
const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  

  const safeExercises = Array.isArray(exercises) ? exercises : []
  
  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises exercises={safeExercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home