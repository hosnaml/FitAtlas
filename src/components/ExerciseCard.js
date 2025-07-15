import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'
import {fetchExerciseImage} from '../utils/fetchData'

function ExerciseCard({exercise}) {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  // Commented out to reduce API requests and avoid rate limiting
  // useEffect(() => {
  //   const getExerciseImage = async () => {
  //     if (exercise.id) {
  //       setLoading(true)
  //       try {
  //         const imageData = await fetchExerciseImage(exercise.id, '720')
  //         if (imageData) {
  //           setImageUrl(imageData)
  //         }
  //       } catch (error) {
  //         console.error('Failed to fetch exercise image:', error)
  //       } finally {
  //         setLoading(false)
  //       }
  //     }
  //   }

  //   getExerciseImage()
    
  //   return () => {
  //     if (imageUrl && imageUrl.startsWith('blob:')) {
  //       URL.revokeObjectURL(imageUrl)
  //     }
  //   }
  // }, [exercise.id])

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        {/* Placeholder div instead of fetched image to avoid API rate limiting */}
        <div 
          style={{
            height: '326px',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#666',
            fontSize: '14px',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>🏋️</div>
          <div>{exercise.name}</div>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>
            {exercise.bodyPart} • {exercise.target}
          </div>
        </div>
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