import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import Bodyparts from './Bodyparts';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png'

import ExerciseCards from './ExerciseCards'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};


function HorizonScrollbar({ data, setBodyPart, bodyPart , bodyParts}) {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    title={item.id || item}
                    itemI={item.id || item}
                    margin="0 20px"
                >
                    {bodyParts ? <Bodyparts item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCards exercise={item} /> }
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizonScrollbar ;