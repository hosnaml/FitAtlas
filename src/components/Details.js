import React from 'react'
import {Typography, Stack, Button} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

function Details({exerciseDetail}) {
    const {bodyPart, name, target, equipment} = exerciseDetail
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]



  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
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
            <div style={{textTransform: 'capitalize'}}>{name}</div>
            <div style={{ fontSize: '12px', marginTop: '5px' }}>
            {bodyPart} • {target}
            </div>
        </div>
        <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
            <Typography variant="h3" textTransform="capitalize">
                {name}
            </Typography>
            <Typography variant="h6">
                Exercises keep you strong. <strong>{name}</strong> {` `}
                is one of the best exercises to target your <strong>{target}</strong>. It will help you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item, index) => (
                <Stack key={index} direction="row" gap="24px" alignItems="center">
                    <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                        <img src={item.icon} alt={bodyPart} loading="lazy" style={{width: '50px', height: '50px'}}/>
                    </Button>
                    <Typography textTransform="capitalize" variant="h5">
                        {item.name}
                    </Typography>
                </Stack>
            ))}
            <Button variant="contained" color="error" onClick={() => {
                const videosSection = document.getElementById('exercise-videos');
                if (videosSection) {
                    videosSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }}>
                Watch {name} exercise videos</Button>
        </Stack>
    </Stack>
  )
}

export default Details