import { Box } from '@mui/material'
import React, { useState } from 'react'
import Herobanner from '../components/Herobanner'
import ExerciseSearch from '../components/ExerciseSearch'
import Exercises from '../components/Exercises';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  
  return (
    <Box>
      <Herobanner />
      <ExerciseSearch setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises       setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />

    </Box>
  )
}

export default Home