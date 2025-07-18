import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '115px', xs: '30px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px', margin: '0px 20px'}} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{textDecoration: 'none', color: '#3A1212', boderBottom: '3px solid #1E73BE'}}>Home</Link>
      <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
