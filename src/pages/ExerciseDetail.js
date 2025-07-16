import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {fetchData, exerciseOptions} from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseVideosUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
      //const exerciseVideosData = await fetchData(`${exerciseVideosUrl}/search?query=${exerciseDetailData.name}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
    }
    fetchExerciseData()
  }, [id])

  return (
    <Box>
      <Details  exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail