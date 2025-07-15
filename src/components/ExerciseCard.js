import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'
import {fetchExerciseImage} from '../utils/fetchData'

function ExerciseCard({exercise}) {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getExerciseImage = async () => {
      if (exercise.id) {
        setLoading(true)
        try {
          const imageData = await fetchExerciseImage(exercise.id, '720')
          if (imageData) {
            setImageUrl(imageData)
          }
        } catch (error) {
          console.error('Failed to fetch exercise image:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    getExerciseImage()
    
    return () => {
      if (imageUrl && imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(imageUrl)
      }
    }
  }, [exercise.id])

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        {imageUrl && <img 
          src={imageUrl} 
          alt={exercise.name} 
          loading="lazy"
          style={{
            opacity: loading ? 0.7 : 1,
            transition: 'opacity 0.3s ease'
          }}
        />}
        <Stack>
            <Button sx={{ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold" sx={{fontSize: {lg: '24px', xs: '20px'}}} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
        </Typography>
    </Link> 
  )
}

export default ExerciseCard