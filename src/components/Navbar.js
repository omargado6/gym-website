import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo-1.png'
function Navbar() {
    return (
        <Stack direction="row" justifyContent="space-around " sx={{ gap: { sm: '80px', xs: '35px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20p" >
            <Link to="/">
                <img src={Logo} alt='' style={{ maxWidth:'100%', maxHeight: '100%', margin: '0px 20px' }}/>
            </Link>
            <Stack direction="row"
                gap="35px"
                fontFamily="Alegreya"
                fontSize="22px"
                alignItems="flex-end">
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #FF2625'  }} >Home</Link>
                <a href='#exercise' style={{ textDecoration: 'none', color: '#3A1212', }}>Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar