import React, { useRef } from 'react';
import {Button, Paper, Box, Typography} from '@mui/material';

const MyComponent = () => {
    const myRef = useRef(null);

    const scrollToRef = () => {
        if (myRef.current) {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 3, borderRadius: '16px' }}>
            <Box>
                <Button variant="contained" onClick={scrollToRef}>
                    Перейти к элементу
                </Button>
            </Box>
            <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                <Typography variant="h6">Раздел 1</Typography>
                <Typography>Содержимое раздела 1...</Typography>
            </Paper>
            <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                <Typography variant="h6">Раздел 2</Typography>
                <Typography>Содержимое раздела 2...</Typography>
            </Paper>
            <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                <Typography variant="h6">Раздел 3</Typography>
                <Typography>Содержимое раздела 3...</Typography>
            </Paper>
            <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                <Typography variant="h6">Раздел 1</Typography>
                <Typography>Содержимое раздела 1...</Typography>
            </Paper>
            <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                <Typography variant="h6">Раздел 2</Typography>
                <Typography>Содержимое раздела 2...</Typography>
            </Paper>
            <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                <Typography variant="h6">Раздел 3</Typography>
                <Typography>Содержимое раздела 3...</Typography>
            </Paper>

            <div style={{ marginTop: '500px' }} ref={myRef}>
                Целевой элемент
            </div>
        </Paper>
    );
};

export default MyComponent;
