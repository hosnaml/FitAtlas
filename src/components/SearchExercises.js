import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

function SearchExercises({setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])
  
  const navigate = useNavigate()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${exerciseOptions.url}/bodyPartList`, exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData(exerciseOptions.url, exerciseOptions)
      
      if(!exercisesData) {
        setExercises([])
        return
      }

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercises)
    }
  }   
  

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input: {fontWeight: '700', border: 'none', borderRadius: '4px', outline: 'none', px: '14px', py: '11px', color: '#3A1212'}, 
          width: {lg: '800px', xs: '350px'},
          backgroundColor: '#fff',
          borderRadius: '4px'
        }}
        placeholder="Search Exercises"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        height="76px"
        />
        <Button className="search-btn" sx={{backgroundColor: '#FF2625', color: '#fff', textTransform: 'none', width: {lg: '173px', xs: '80px'}, fontSize: {lg: '20px', xs: '14px'}, height: '56px', position: 'absolute', right: '0px', top: '0px'}}
         onClick={handleSearch}
         >Search</Button>
         <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
        
         </Box>
      </Box>
    </Stack>
  )
}

export default SearchExercises