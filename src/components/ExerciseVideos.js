import React from 'react'
import {Box, Typography, Stack} from '@mui/material'

function ExerciseVideos({exerciseVideos, name}) {
    
  return (
    <Box id="exercise-videos" sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">
      <Typography variant="h4" mb="33px" textAlign="center">
        Watch <span style={{color: '#1E73BE', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{flexDirection: {lg: 'row'}, gap: {lg: '110px', xs: '0'}}} justifyContent="center" flexWrap="wrap" px="40px">
        {exerciseVideos?.contents?.slice(0, 4).map((item, index) => (
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos