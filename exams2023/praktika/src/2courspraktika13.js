import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

const NumberSquares = () => {
    const squares = Array.from({ length: 20 }, (_, i) => (i + 1) ** 2);

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 2, borderRadius: '15px' }}>
                {squares.map((square, index) => (
                    <Typography key={index} variant="body1">
                        {index + 1}<sup>2</sup> = {square}
                    </Typography>
                ))}
            </Paper>
        </Container>
    );
};

export default NumberSquares;
