import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MyComponent = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: '16px' }}>
                <Typography variant="body1" style={{ fontFamily: 'Arial' }}>
                    Это первое предложение абзаца.
                </Typography>
                <Typography variant="body1" style={{ fontFamily: 'Times New Roman' }}>
                    Второе предложение выглядит немного иначе.
                </Typography>
                <Typography variant="body1" style={{ fontFamily: 'Helvetica' }}>
                    Третье предложение использует другой шрифт.
                </Typography>
                <Typography variant="body1" style={{ fontFamily: 'Courier New' }}>
                    Четвёртое предложение также уникально.
                </Typography>
                <Typography variant="body1" style={{ fontFamily: 'Georgia' }}>
                    Пятое предложение завершает абзац.
                </Typography>
            </Paper>
        </Box>
    );
};

export default MyComponent;
