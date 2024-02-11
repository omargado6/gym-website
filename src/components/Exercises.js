import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React, { useState, useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utlis/fetchData';
import ExerciseCards from './ExerciseCards';



function Exercises({ setExercises, bodyPart, exercises }) {
    // console.log(exercises)
    const [currentPage, setcurrentpage] = useState(1)
    const exercisesPerPage = 6;


    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);

    const paginate = (e, value) => {
        setcurrentpage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    return (
        <Box
            id="exercise"
            sx={{ mt: { lg: '100px' } }}
            mt='30px'
            p='20px'
        >
            <Typography variant='h4' textTransform='capitalize' fontWeight='bold' marginBottom='30px'>
                show resault
            </Typography>
            <Stack
                direction='row'
                flexWrap='wrap' justifyContent='center'
                sx={{ gap: { lg: '100px', sm: '50px' }, mb: '20px' }}
            >
                {currentExercises.map((exercise) => (
                    <ExerciseCards key={Math.random()} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt='50px' alignItems='center'>
                {exercises.length > 6 && (
                    <Pagination

                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises