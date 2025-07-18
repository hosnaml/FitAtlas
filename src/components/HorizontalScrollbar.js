import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import ExerciseCard from './ExerciseCard'


const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext)
    return (
        <Typography onClick={() => scrollNext()} className="right-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#1E73BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Typography>
    )
}

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext)
    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#1E73BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Typography>
    )
}

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item, index) => (
            <Box
             key={item.id || item} 
             itemID={item.id || item} 
             title={item.id || item}
             m="0 40px"
            >
            {isBodyParts ? 
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
                : <ExerciseCard exercise={item}/>
                }
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar