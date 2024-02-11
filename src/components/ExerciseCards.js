import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

function ExerciseCards({ exercise }) {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>

      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

      <Stack direction='row' gap='20px'>
        <Button sx={{ ml: '10px', bgcolor: '#ffa9a9', color: '#fff', fontSize: '14px', borderRadius: '5px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '10px', bgcolor: '#fcc757', color: '#fff', fontSize: '14px', borderRadius: '5px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>

      <Typography variant='h6' fontWeight='bold' color='#000' ml='10px' mt='10px' pb='10px' textTransform='capitalize'>{exercise.name}</Typography>

    </Link>
  )
}

export default ExerciseCards