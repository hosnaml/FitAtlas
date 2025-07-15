import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        setBodyParts(['all', ...(bodyPartsData || [])]);
      } catch (error) {
        console.error('Failed to fetch body parts:', error);
        setBodyParts(['all']); 
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        
        if (!exercisesData || !Array.isArray(exercisesData)) {
          setExercises([]);
          return;
        }
        
        const searchedExercises = exercisesData.filter(
        (item) => {
          const searchLower = search.toLowerCase();
          
          // Basic fields (original search)
          const nameMatch = item.name.toLowerCase().includes(searchLower);
          const targetMatch = item.target.toLowerCase().includes(searchLower);
          const equipmentMatch = item.equipment.toLowerCase().includes(searchLower);
          const bodyPartMatch = item.bodyPart.toLowerCase().includes(searchLower);
          

          const difficultyMatch = item.difficulty?.toLowerCase().includes(searchLower);
          const categoryMatch = item.category?.toLowerCase().includes(searchLower);
          

          const secondaryMuscleMatch = item.secondaryMuscles?.some(muscle => 
            muscle.toLowerCase().includes(searchLower)
          );
          
    
          const instructionsMatch = item.instructions?.some(instruction => 
            instruction.toLowerCase().includes(searchLower)
          );

          const descriptionMatch = item.description?.toLowerCase().includes(searchLower);
          
          const searchWords = searchLower.split(' ').filter(word => word.length > 0);
          const wordMatch = searchWords.some(word => 
            item.name.toLowerCase().includes(word) ||
            item.target.toLowerCase().includes(word) ||
            item.bodyPart.toLowerCase().includes(word) ||
            item.equipment.toLowerCase().includes(word)
          );
          
          return nameMatch || targetMatch || equipmentMatch || bodyPartMatch || 
                 difficultyMatch || categoryMatch || secondaryMuscleMatch || 
                 instructionsMatch || descriptionMatch || wordMatch;
        }
      );

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Search failed:', error);
        setExercises([]);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;