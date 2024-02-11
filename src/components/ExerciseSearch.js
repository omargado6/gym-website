import { Box, Stack, Button, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react'
import { exerciseOptions, fetchData } from '../utlis/fetchData';
import HorizonScrollbar from './HorizonScrollbar';
function ExerciseSearch({ bodyPart, setExercises, setBodyPart }) {
    //                 this ^^                 and this ^^   we import it to export to the HorizontalScrollbar             
    const [search, setSearch] = useState('');
    const [bodyParts, setbodyParts] = useState([]);
    // get the data shich user enter it from the server (API) 
    console.log('this is the search', search)
    useEffect(() => {
        const fetchexercisedata = async () => {
            const bodypartsdata = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setbodyParts([`all`, ...bodypartsdata])
        }
        fetchexercisedata()
    }, [])
    //this return you the value which the user enter
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search)
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
            // for me 
            // console.log(searchedExercises)
        }
    }
    return (
        <Box textAlign="center" mt='60px'>
            <Typography variant='h3' fontWeight='700' > Awesome Exercises You <br /> Should Know </Typography>
            <Stack spacing={2} alignItems='center' direction='row' mt='40px' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextField height="76px"
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '900px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text" />
                <Button className="search-btn"
                    onClick={handleSearch}
                    style={{ fontSize: '20px', borderRadius: '10px', fontWeight: '600', }}
                    sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '110px' }, height: '56px', fontSize: { lg: '20px', xs: '14px' } }}>
                    SEARCH
                </Button>
            </Stack>
            <Box sx={{ position: 'relative', width: '100%', p: '20px', mt: '30px' }}>
                {/* <HorizontalScrollbar data={bodyParts} bodyParts setbodyPart={setBodyPart} bodyPart={bodyPart}/> */}
                {/*                     { ^ } i made this to use another page like import it          */}
                <HorizonScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
        </Box>
    )
}

export default ExerciseSearch;