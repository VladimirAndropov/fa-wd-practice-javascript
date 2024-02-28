import React from 'react';
import { Paper, Typography } from '@mui/material';

function MyComponent() {
    return (
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h1">Заголовок</Typography>
            <hr style={{ width: '100%', margin: '20px 0' }} />
            <Typography paragraph>
                Этот абзац относится к тексту заголовка. Здесь может быть ваш текст.
            </Typography>
        </Paper>
    );
}

export default MyComponent;
