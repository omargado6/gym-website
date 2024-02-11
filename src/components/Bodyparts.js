import { Stack, Typography } from '@mui/material'
import React from 'react'
import img11 from '../assets/icons/gym.png'

function Bodyparts({ item, bodyPart, setBodyPart }) {
  return (
    
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"

      className="bodyPart-card"
      sx={
        bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '260px', height: '260px', cursor: 'pointer', gap: '20px' } :
          { background: '#fff', borderBottomLeftRadius: '20px', width: '260px', height: '260px', cursor: 'pointer', gap: '20px' }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1500, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={img11} alt="dumbbell" style={{ width: '25px', height: '25px' }} />
      <Typography variant='h5' fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  );


}

export default Bodyparts
