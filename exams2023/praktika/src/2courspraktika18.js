import React from 'react';
import { Paper, Box } from '@mui/material';

function MyFormattedTextForm() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Paper elevation={3} sx={{ borderRadius: '16px', p: 2 }}>
        <pre>
          Ваш предварительно отформатированный текст
        </pre>
            </Paper>
        </Box>
    );
}

export default MyFormattedTextForm;
