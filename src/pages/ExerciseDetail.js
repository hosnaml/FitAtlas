import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {fetchData, exerciseOptions, youtubeOptions} from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const {id} = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseVideosUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      
      const exerciseVideosData = await fetchData(`${exerciseVideosUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData)

      const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData)
      
      const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentExercisesData)
      
    }
    fetchExerciseData()
  }, [id])

  return (
    <Box>
      <Details  exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail