import React, {useEffect, useState} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {fetchData, exerciseOptions} from '../utils/fetchData'
import Pagination from '@mui/material/Pagination'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises, setExercises, bodyPart}) {
 
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = (exercises || []).slice(indexOfFirstExercise, indexOfLastExercise)
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let exercisesData = []
        
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
        }
        
        setExercises(exercisesData || [])
        setCurrentPage(1) 
      } catch (error) {
        console.error('Failed to fetch exercises:', error);
        setExercises([]);
      }
    }

    fetchExercisesData()
  }, [bodyPart, setExercises])
  
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
  }

  return (
    <Box id="exercises" sx={{mt: {lg: '110px'}}} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" >Showing Results</Typography>
      <Stack direction="row" sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise, index) => {
            console.log('Rendering exercise:', exercise);
            return <ExerciseCard key={index} exercise={exercise}/>
          })}
      </Stack>
      <Stack mt="100px" alignItems="center" width="100%">
        {exercises && exercises.length > 9 && (
          <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / 9)} page={currentPage} onChange={paginate} size="large" />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises