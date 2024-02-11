
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizonScrollbar from './HorizonScrollbar'
import Loader from './Loader'

function SimilarEx({ targetExercises, equipmentExercises }) {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography sx={{ ml: '20px' }} variant='h3' mb="33px">
                Similar Target Muscle Exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {targetExercises.length ? <HorizonScrollbar data={targetExercises} /> : <Loader />}
            </Stack>

            <Typography variant='h3' mb="33px" sx={{ ml: '20px' }}>
                Similar Equipment Exercises
            </Typography>
            <Stack direction="row" sx={{ p: 4, position: 'relative' }}>
                {equipmentExercises.length !== 0 ? <HorizonScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarEx