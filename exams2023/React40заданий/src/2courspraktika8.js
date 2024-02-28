import React from 'react';
import { Paper, Typography } from '@mui/material';

const NumberList = () => {
    const colors = [
        'red', 'green', 'blue', 'orange', 'purple',
        'cyan', 'magenta', 'lime', 'pink', 'teal'
    ];

    return (
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
            {colors.map((color, index) => (
                <Typography
                    key={index}
                    style={{ color: color, margin: '5px' }}
                >
                    {index + 1}
                </Typography>
            ))}
        </Paper>
    );
};

export default NumberList;
