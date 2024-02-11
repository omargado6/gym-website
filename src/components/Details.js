import { Button, Stack, Typography } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

import React from 'react'

function Details({ exersice }) {
    const { bodyPart, gifUrl, name, target, equipment } = exersice;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <>
            <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
                <img src={gifUrl} alt={name} className="detail-image" />
                <Stack>
                    <Typography variant='h3' color="#FF2625" sx={{ pb: '40px' }} textTransform="capitalize">
                        {name}
                    </Typography>
                    <Typography variant='h6'>Exercises {name} keep you strong <br />
                        bup is one of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                        <br /> mood and gain energy.
                    </Typography>
                    {extraDetail?.map((ex) => (
                        <Stack key={ex.id} direction="row" gap="15px" alignItems="center" mt='20px'>
                            <Button>
                            <img src={ex.icon} alt='' style={{ width: '40', height: '40px' }} />
                            </Button>
                            <Typography textTransform="capitalize" variant='h5'>
                                {ex.name}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    )
}

export default Details