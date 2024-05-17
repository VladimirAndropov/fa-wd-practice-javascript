import React from 'react';
import { Box, Paper, FormControl, TextField, Button } from '@mui/material';

// Оболочка
const ShellComponent = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Paper elevation={3} sx={{ borderRadius: '15px', p: 2 }}>
                <FormControl fullWidth>
                    {children}
                </FormControl>
            </Paper>
        </Box>
    );
};

// Главный компонент
const MainComponent = () => {
    return (
        <ShellComponent>
            {/* Здесь можно добавлять дочерние элементы */}
            <TextField label="Имя" variant="outlined" margin="normal" />
            <TextField label="Фамилия" variant="outlined" margin="normal" />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Отправить
            </Button>
        </ShellComponent>
    );
};

export default MainComponent;
