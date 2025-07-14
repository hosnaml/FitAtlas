import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

function SearchExercises() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if(search) {
      navigate(`/exercises/${search}`)
    }
  } 
  

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{input: {fontWeight: '700', border: 'none', borderRadius: '4px', outline: 'none', px: '14px', py: '11px', color: '#3A1212'}, width: {lg: '800px', xs: '350px'}}}
        placeholder="Search Exercises"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        height="76px"
        backgroundColor="#fff"
        borderRadius="4px"
        />
        <Button className="search-btn" sx={{backgroundColor: '#FF2625', color: '#fff', textTransform: 'none', width: {lg: '173px', xs: '80px'}, fontSize: {lg: '20px', xs: '14px'}, height: '56px', position: 'absolute', right: '0px', top: '0px'}}
         onClick={handleSearch}
         >Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises