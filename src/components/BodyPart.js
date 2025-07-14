import React from 'react'
import {Box, Typography, stack} from '@mui/material'
import Icon from '../assets/icons/gym.png'

function BodyPart() {
  return (
    <stack>
        <img src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}}/>
    </stack>
  )
}

export default BodyPart