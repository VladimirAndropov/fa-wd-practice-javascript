import React from 'react';
import { Paper, Box, FormControl } from '@mui/material';

const ImageForm = () => {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <FormControl variant="outlined">
                <Paper
                    elevation={3}
                    sx={{
                        width: 200,
                        height: 200,
                        borderRadius: '16px',
                        border: '2px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Поместите здесь ваше изображение */}
                    <img src="https://cdn.tvc.ru/pictures/o/249/097.jpg" alt="Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Paper>
            </FormControl>
        </Box>
    );
};

export default ImageForm;
