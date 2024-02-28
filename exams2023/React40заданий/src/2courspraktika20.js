import React from 'react';
import { TextField, Paper, Box } from '@mui/material';

const MyForm = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <Paper
                elevation={3}
                sx={{ padding: '20px', borderRadius: '15px' }}
            >
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Ваш текст"
                    variant="outlined"
                    multiline
                    rows={4}
                    defaultValue="Удаленный и вставленный текст"
                />
            </Paper>
        </Box>
    );
}

export default MyForm;
