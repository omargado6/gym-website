import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

function Footer() {
  return (
    <Box mt="40px" bgcolor="#FFF3F4">
      <Stack gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '150px', height: '41px' }} />
      </Stack>
      <Typography variant="h6" mt="41px" textAlign="center" pb="20px">Made By (omar)  </Typography>
    </Box>
  )
};

export default Footer;